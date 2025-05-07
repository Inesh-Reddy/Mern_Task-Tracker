const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./db");
const { mongo, default: mongoose } = require("mongoose");
const Task = require("./models/task");

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

app.post("/tasks", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const task = new Task({
    title: title,
    description: description,
  });
  await task.save();

  res.json({
    message: `Created`,
  });
});

const start = async () => {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port : ${process.env.PORT}`);
  });
};

start();
