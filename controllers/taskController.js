const Task = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  try {
    const filter = { user: req.user.id };
    if (req.query.priority) {
      filter.priority = req.query.priority;
    }
    if (req.query.status) {
      filter.status = req.query.status;
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const tasks = await Task.find(filter).limit(limit).skip(skip);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const data = req.body;
    const task = await Task.create({ ...data, user: req.user.id });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.find({ _id: id, user: req.user.id });
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
    const newTask = await Task.findOneAndUpdate({ _id: id, user: req.user.id }, { ...updates, user: req.user.id }, {
      returnDocument: "after",
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
    const deletedTask = await Task.findOneAndDelete({ _id: id, user: req.user.id });
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
