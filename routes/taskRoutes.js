const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  getById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { logRequest } = require("../middleware/authMiddleware");

router.get("/", logRequest, getTasks);
router.get("/:id", getById);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
