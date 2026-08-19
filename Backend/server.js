const mongoose = require("mongoose");
const connectDB = require("./DB/connect");
const errorHandling = require("./middleware/centralizedMiddleware");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/tasks/:taskId/comments", require("./routes/commentRoutes"));
app.use("/api/auth", require("./routes/userRoutes"));
app.use(errorHandling);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server started successfully");
});
