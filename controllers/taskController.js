const Task = require("../models/taskModel");

exports.getTasks = async (req, res, next) => {
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
    next(err);
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

exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id, user: req.user.id });
    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const newTask = await Task.findOneAndUpdate({ _id: id, user: req.user.id }, updates, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!newTask) {
      res.status(404);
      throw new Error("Task not found");
    }
    res.status(200).json(newTask);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedTask = await Task.findOneAndDelete({ _id: id, user: req.user.id });
    if (!deletedTask){
      res.status(404);
      throw new Error("Task not found");
    }
    res.status(204).end();
  } catch (err) {
    next(err)
  }
};
