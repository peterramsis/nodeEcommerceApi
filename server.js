const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
const categoryRouter = require("./routes/categoryRoute");
dotenv.config({
    path: "config.env",
});

dbConnection();

app.use(express.json());
app.use("/api/categories", categoryRouter);

const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`mode ${process.env.NODE_ENV}`);
}




let port = process.env.port || 8000;

app.get("/", (req, res) => {
    res.send("click");
});




app.listen(port, () => console.log("click"));