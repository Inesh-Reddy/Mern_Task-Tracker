const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./db");
const { mongo, default: mongoose } = require("mongoose");
const Task = require("./models/task");
const taskRouter = require("./routes/tasks");

dotenv.config();
const app = express();

app.use(
  cors({
    methods: ["GET"],
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: `Task Tracker API`,
  });
});

app.use("/api/tasks", taskRouter);

const start = async () => {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port : ${process.env.PORT}`);
  });
};

start();
