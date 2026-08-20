const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  pfp: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", userModel);