const { createUser, signin } = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signin);

module.exports = router;