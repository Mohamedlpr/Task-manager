const express = require("express");
const router = express.Router();
const { createComment } = require("../controllers/commentController");

router.post("/", createComment);

module.exports = router;