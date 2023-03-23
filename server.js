const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({
  path: "config.env",
});

let port = process.env.port || 8000;

app.get("/", (req, res) => {
  res.send("click");
});

app.listen(port, () => console.log("click"));
