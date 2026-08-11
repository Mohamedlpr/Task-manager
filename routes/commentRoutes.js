const express = require("express");
const router = express.Router({ mergeParams: true });
const { createComment, getComments } = require("../controllers/commentController");

router.post("/", createComment);
router.get("/", getComments);

module.exports = router;