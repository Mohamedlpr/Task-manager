const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  getById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getTasks);
router.get("/:id", getById);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
