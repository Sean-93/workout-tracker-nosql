const path = require("path");
const HTMLrouter = require("express").Router();

HTMLrouter.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

HTMLrouter.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = HTMLrouter;
