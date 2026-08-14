const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

exports.signin = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userEmailVerification = await User.findOne({ email: userEmail });
    if (!userEmailVerification) {
      return res.status(400).json({ message: "user was not found" });
    };
    const password = await bcrypt.compare(userPassword, userEmailVerification.password);
    if (!password) {
      return res.status(401).json({ message: "password is not correct" })
    }
    const token = await jwt.sign({ id: User._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json(token)
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}
