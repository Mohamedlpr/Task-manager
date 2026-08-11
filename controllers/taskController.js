const Task = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  try {
    const filter = {};
    if (req.query.priority) {
      filter.priority = req.query.priority;
    }
    if (req.query.status) {
      filter.status = req.query.status;
    }
    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const data = req.body;
    const task = await Task.create(data);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const newTask = await Task.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!newTask) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(newTask);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
