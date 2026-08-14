const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  getById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { tokenVerification } = require("../middleware/authMiddleware");

router.get("/", tokenVerification, getTasks);
router.get("/:id", tokenVerification, getById);
router.post("/", tokenVerification, createTask);
router.patch("/:id", tokenVerification, updateTask);
router.delete("/:id", tokenVerification, deleteTask);

module.exports = router;
