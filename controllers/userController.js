const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const user = await User.create({ email: userEmail, password: hashedPassword });
    res.status(200).json({ message: "Signed Up successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
