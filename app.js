const fs = require("fs");
const path = require("path");
const request = require("request");
const express = require("express");
const compression = require("compression");
const serverless = require("serverless-http");

// instance of the server
const app = express();

// gzip compression
app.use(compression());

// set views folder
app.set("views", __dirname);

// read/save config.json
let config = { usersCount: 0, pages: 0, lastUpdate: 0 };
const configPath = path.join(__dirname, "config.json");

const notFirstTime = fs.existsSync(configPath);
console.log("notFirstTime", notFirstTime);
if (notFirstTime) config = JSON.parse(fs.readFileSync(configPath));
else fs.writeFile(configPath, JSON.stringify(config), { encoding: "utf8" });

// auto retrieve pages from cf api
let maxPages = config.pages;
const updater = () => {
  console.log("Updating cache...");

  const cache = path.join(__dirname, "cache");
  if (!fs.existsSync(cache)) fs.mkdirSync(cache);
  request.get(
    "http://codeforces.com/api/user.ratedList",
    (err, response, body) => {
      const users = JSON.parse(body).result.filter(
        user => user.titlePhoto !== "http://userpic.codeforces.com/no-title.jpg"
      );
      const n = users.length;

      // stop if no new users
      if (config.usersCount == n) return;

      const m = 100; /* users per page */
      for (let i = 0; i < n; i += m) {
        fs.writeFile(
          path.join(__dirname, "cache", `users_${i / m + 1}.json`),
          JSON.stringify(users.slice(i, i + m)),
          { encoding: "utf8" },
          err => {
            if (err) console.error("users json", err);
          }
        );
      }
      maxPages = Math.ceil(n / m);
      config.usersCount = n;
      config.pages = maxPages;
      config.lastUpdate = new Date().getTime();
      fs.writeFile(
        configPath,
        JSON.stringify(config),
        { encoding: "utf8" },
        err => {
          if (err) console.error("config json", err);
        }
      );
      console.log("Updated cache :)");
    }
  );
};

const now = new Date();
const interval = 60 * 60 * 1000; // 1 hour

// update cache immediately if last update was made more than [interval] time ago
if (now.getTime() - config.lastUpdate > interval) updater();

// auto update
setInterval(updater, interval);

// static files folder
app.use(express.static(__dirname));

// rest api for users json
app.get("/data/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "cache", `users_${req.params.id}.json`));
});

// entry point for the gallery
app.get("/gallery", (req, res) => {
  res.sendFile("index.html");
});

app.get("/config", (req, res) => {
  res.sendFile(configPath);
});

// redirect to the only valid webpage
app.use((req, res) => res.redirect("/gallery"));

// listen carefully
app.listen(process.env.PORT || 5000, () => console.log("listening"));

module.exports.handler = serverless(app);
