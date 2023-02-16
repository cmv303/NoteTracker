const path = require("path");
const routerVar = require("express").Router();

//tells server what to do when routes are called
routerVar.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
routerVar.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = routerVar;
