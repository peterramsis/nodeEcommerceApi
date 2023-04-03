const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({
  path: "config.env",
});

app.use(express.json());

const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode ${process.env.NODE_ENV}`);
}

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema
let schemaCategory = mongoose.Schema({
  name: String,
});
//create model
let CategoryModel = mongoose.model("category", schemaCategory);

let port = process.env.port || 8000;

app.get("/", (req, res) => {
  res.send("click");
});

app.post("/addPost", (req, res) => {
  const name = req.body.name;
  const newCatgeory = new CategoryModel({ name });

  newCatgeory
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(port, () => console.log("click"));
