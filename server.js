const mongoose = require("mongoose");
const connectDB = require("./DB/connect");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

connectDB();

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("api/task/:taskId/comments", require("./routes/commentRoutes"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server started successfully");
});
