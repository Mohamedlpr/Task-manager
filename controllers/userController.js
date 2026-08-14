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

exports.login = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userEmailVerification = await User.findOne({ email: userEmail });
    const password = await bcrypt.compare(userPassword, userEmailVerification.password);
    if (!userEmailVerification || !password) {
      return res.status(401).json({ message: "login information you entered is incorrect" })
    }
    const token = jwt.sign({ id: userEmailVerification._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({token})
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}
