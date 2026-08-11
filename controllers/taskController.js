const Task = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  try {
    let allowedFilters = ["status", "priority"];
    let filter = {};
    allowedFilters.forEach(async (category) => {
      if (req.query[category] !== undefined) {
        filter[category] = req.query[category]
        const tasks = await Task.find(filter);
        return res.status(200).json(tasks);
      }
    });
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
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
