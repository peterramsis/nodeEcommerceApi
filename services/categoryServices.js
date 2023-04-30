const CategoryModel = require("../models/categories");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

exports.categoryPost = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await CategoryModel.create({
    name: name,
    slug: slugify(name),
  });
  res.status(201).json({ data: category });
});

exports.categoriesGet = asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  const category = await CategoryModel.find({}).limit(limit).skip(skip);

  res.status(200).json({ result: category.length, page, data: category });
});

exports.categoryGet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category)
    res.status(404).json({ msg: `no category found for this id ${id}` });

  res.status(200).json({ result: category.length, data: category });
});

exports.categorieUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    {
      name,
      slug: slugify(name),
    },
    { new: true }
  );

  if (!category)
    res.status(404).json({ msg: `no category found for this id ${id}` });

  res.status(200).json({ result: category.length, data: category });
});

exports.categoryDelete = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await CategoryModel.findByIdAndDelete({ _id: id });

  if (!category)
    res.status(404).json({ msg: `no category found for this id ${id}` });

  res.status(204).send();
});
