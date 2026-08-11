const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  const taskId = req.params.taskId;
  const data = req.body.text;
  const comment = await Comment.create({ text: data, taskId: taskId });
  return res.status(200).json(comment);
};