const fs = require('fs');
const path = require('path');
const request = require('request');

const sass = require('node-sass-middleware');
const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname);

app.use(sass({ src: __dirname, dest: __dirname, indentedSyntax: false }));

// auto retrieve 
let maxPages = 139;
setInterval(() => {
  const usersJson = path.join(__dirname, "cache", "users.json");
  request.get("http://codeforces.com/api/user.ratedList?activeOnly=true",
  (err, response, body) => {
      const users = JSON.parse(body).result;
      const n = users.length;
      const m = 100;
      for (let i = 0; i < n; i += m) {
        fs.writeFile(
          path.join(__dirname, "cache", `users_${i / m + 1}.json`),
          JSON.stringify(users.slice(i, i + m)),
          { encoding: "utf8" });
      }
      maxPages = Math.max(maxPages, (n+m-1)/m);
    });
  }, 60 * (60 * 1000));

  
  app.use(express.static(__dirname));
  
  app.get("/data/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "cache", `users_${req.params.id}.json`));
  });

  app.get("/gallery", (req, res) => {
    let page = req.query.page || 1;
    page = Math.min(page, maxPages);
    page = Math.max(page, 1);
    fs.readFile(
      path.join(__dirname, "cache", `users_${page}.json`), { encoding: "utf8" },
      (err, data) => {
        if (err) {
          console.error(err);
          res.render("website", { page: -1, pagesCount: 0, users: JSON.parse('[{"handle":"Unknown", "titlePhoto": ""}]') });
        } else {
          res.render("website", { page: page, pagesCount: maxPages, users: JSON.parse(data) });
        }
      }
    );
  });

  app.use((req, res) => res.send("404 :P"));
  
  app.listen(process.env.PORT || 5000, () => console.log("listening"));