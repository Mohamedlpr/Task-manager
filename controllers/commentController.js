const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    const task = req.params.taskId;
    const data = req.body.text;
    const comment = await Comment.create({ text: data, taskId: task });
    return res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};