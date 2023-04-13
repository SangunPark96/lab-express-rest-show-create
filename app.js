const express = require("express");
const app = express();
app.use(express.json());
const logsController = require("./controllers/logsController.js");


app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
  });

app.use("/logs", logsController);

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" })
  });

  
module.exports = app