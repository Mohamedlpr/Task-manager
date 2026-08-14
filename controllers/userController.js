const { json } = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userEmailVerification = await User.findOne({ email: userEmail });
    if (userEmailVerification) {
      return res.status(400).json({ message: "email already registered" });
    };
    const userPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const user = await User.create({ email: userEmail, password: hashedPassword });
    res.status(201).json({ message: "signed up successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
