const express = require('express');
const sass = require('node-sass-middleware');
const app = express();
app.use(sass({
  src: __dirname,
  dest: __dirname,
  indentedSyntax: false
}));
app.use(express.static(__dirname));
app.get("/", (req, res) => res.sendFile("index.html"));
app.use((req, res) => res.send("404 :P"));
app.listen(process.env.PORT || 5500);