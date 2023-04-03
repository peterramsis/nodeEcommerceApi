const CategoryModel = require('../models/categories');

exports.categoryPost = (req, res) => {
    const name = req.body.name;
    const newCategory = new CategoryModel({ name });

    newCategory
        .save()
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.json(err);
        });
}