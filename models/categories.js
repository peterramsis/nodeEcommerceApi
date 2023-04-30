const mongoose = require("mongoose");

let schemaCategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name is required"],
      unique: [true, "category must be unique"],
      minlength: [3, "Too short category name"],
      maxlength: [30, "Too long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);
//create model
let CategoryModel = mongoose.model("category", schemaCategory);

module.exports = CategoryModel;
