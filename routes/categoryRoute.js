const express = require("express");
const router = express.Router();
const { categoryPost } = require('../services/categoryServices');

router.post("/addPost", categoryPost);

module.exports = router;