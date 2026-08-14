const jwt = require("jsonwebtoken");
require("dotenv").config;

exports.logRequest = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    jwt.verify(authHeader, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "invalid or expired token" });
  }
};