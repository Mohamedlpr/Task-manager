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
router.get("/:id", logRequest, getById);
router.post("/", logRequest, createTask);
router.patch("/:id", logRequest, updateTask);
router.delete("/:id", logRequest, deleteTask);

module.exports = router;
