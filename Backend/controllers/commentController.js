const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    const task = req.params.taskId;
    const data = req.body.text;
    const comment = await Comment.create({ text: data, taskId: task });
    return res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const task = req.params.taskId;
    const comment = await Comment.find({ taskId: task }).populate("taskId");
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findByIdAndDelete(commentId);
    res.status(204).end()
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};