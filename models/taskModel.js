const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "done"],
    default: "pending",
  },
  description: { type: String, required: true, minlength: 10, maxlength: 100 },
  priority: { type: String, enum: ["high", "medium", "low"], required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, immutable: true }
});

module.exports = mongoose.model("Task", taskSchema);
