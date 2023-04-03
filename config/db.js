const mongoose = require("mongoose");


const dbConnection = () => {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("connect");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = dbConnection;