const fs = require("fs");
const path = require("path");
const request = require("request");
const express = require("express");
const compression = require("compression");

const app = express();

// gzip compression
app.use(compression());

// use ejs templates
app.set("view engine", "ejs");

// set views folder
app.set("views", __dirname);

// auto retrieve
let maxPages = 0;
const updater = () => {
  console.log("Updating cache...");

  const usersJson = path.join(__dirname, "cache", "users.json");
  request.get(
    "http://codeforces.com/api/user.ratedList",
    (err, response, body) => {
      const users = JSON.parse(body).result.filter(
        user => user.titlePhoto !== "http://userpic.codeforces.com/no-title.jpg"
      );
      const n = users.length;
      const m = 100;
      for (let i = 0; i < n; i += m) {
        fs.writeFile(
          path.join(__dirname, "cache", `users_${i / m + 1}.json`),
          JSON.stringify(users.slice(i, i + m)),
          { encoding: "utf8" },
          err => console.error("problem", err)
        );
      }
      maxPages = Math.ceil(n / m);
      console.log("Updated cache :)");
    }
  );
};

updater();
setInterval(updater, 60 * (60 * 1000));

// static files folder
app.use(express.static(__dirname));

// rest api for users json
app.get("/data/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "cache", `users_${req.params.id}.json`));
});

// entry point for the gallery
app.get("/gallery", (req, res) => {
  let page = req.query.page || 1;
  page = Math.min(page, maxPages);
  page = Math.max(page, 1);
  fs.readFile(
    path.join(__dirname, "cache", `users_${page}.json`),
    { encoding: "utf8" },
    (err, data) => {
      if (err) {
        console.error(err);
        res.render("website", {
          page: 0,
          pagesCount: 0,
          users: JSON.parse('[{"handle":"Unknown", "titlePhoto": ""}]')
        });
      } else {
        res.render("website", {
          page: page,
          pagesCount: maxPages,
          users: JSON.parse(data)
        });
      }
    }
  );
});

// redirect to the only valid webpage
app.use((req, res) => {
  res.redirect("/gallery");
});

app.listen(process.env.PORT || 5000, () => console.log("listening"));
