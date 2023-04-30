const express = require("express");
const router = express.Router();
const {
  categoryPost,
  categoriesGet,
  categoryGet,
  categorieUpdate,
  categoryDelete,
} = require("../services/categoryServices");

router.route("/").get(categoriesGet).post(categoryPost);
router
  .route("/:id")
  .get(categoryGet)
  .put(categorieUpdate)
  .delete(categoryDelete);
module.exports = router;
