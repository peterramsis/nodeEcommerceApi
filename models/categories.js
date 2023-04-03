const mongoose = require("mongoose");

let schemaCategory = new mongoose.Schema({
    name: String,
});
//create model
let CategoryModel = mongoose.model("category", schemaCategory);


module.exports = CategoryModel;