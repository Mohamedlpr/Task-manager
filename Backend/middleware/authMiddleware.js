const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.tokenVerification = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if(!authHeader){
      return res.status(401).json({message: "authorization was not provided"})
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded
    next();
  } catch {
    res.status(401).json({ message: "invalid or expired token" });
  }
};