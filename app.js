const fs = require('fs');
const path = require('path');
const request = require('request');

// const minify = require('express-minify');
const sass = require('node-sass-middleware');
const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname);
// app.use(minify({ js_match: __dirname, css_match: __dirname }));
// app.use(minify({ cache: path.join(__dirname, 'cache') }));
app.use(sass({ src: __dirname, dest: __dirname, indentedSyntax: false }));
app.use(express.static(__dirname));
app.get("/gallery", (req, res) => {
  let page = req.query.page || 1;
  page = Math.min(page, 139);
  page = Math.max(page, 1);
  fs.readFile(
    path.join(__dirname, "cache", `users_${page}.json`), { encoding: "utf8" },
    (err, data) => {
      if (err) {
        console.log(err);        
        res.render("website", { page: -1, users: JSON.parse('[{"handle":"Unknown", "titlePhoto": ""}]') });
      } else {
        res.render("website", { page: page, users: JSON.parse(data) });
      }        
    }
  );
});

// make sure we have the list
// const usersJson = path.join(__dirname, "cache", "users.json");
// const now = new Date().getTime();

// if (!fs.existsSync(usersJson) || new Date(fs.statSync(usersJson).ctimeMs) + (24 * 60 * 60 * 1000) < now) {
//   request("http://codeforces.com/api/user.ratedList?activeOnly=true").pipe(fs.createWriteStream(usersJson));
// }

app.get("/data/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "cache", `users_${req.params.id}.json`));
});

app.use((req, res) => res.send("404 :P"));

app.listen(process.env.PORT || 5000, () => console.log("listening"));