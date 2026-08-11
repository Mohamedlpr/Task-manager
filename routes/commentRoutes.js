const express = require("express");
const router = express.Router({ mergeParams: true });
const { createComment, getComments, deleteComment } = require("../controllers/commentController");

router.post("/", createComment);
router.get("/", getComments);
router.delete("/:id", deleteComment);

module.exports = router;