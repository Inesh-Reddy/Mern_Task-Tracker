const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewTask = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  try {
    const task = new Task({
      title: title,
      description: description,
    });

    await task.save();
  } catch (error) {
    res.status(300).json({
      msg: error,
    });
  }
  res.status(200).json({
    msg: `task with ${title} created `,
  });
};

const updateTask = async (req, res) => {
  const allowedFields = ["title", "description", "completed"];
  const updates = {};

  for (const key of allowedFields) {
    if (req.body.hasOwnProperty(key)) {
      updates[key] = req.body[key];
    }
  }
  if (updates.length == 0) {
    res.status(200).json({
      msg: `please provide aleast one filed to update`,
    });
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    return res.status(404).send({ error: "Task not found" });
  }
  res.status(200).json({
    msg: {
      title: `${updatedTask.title}`,
      description: `${updatedTask.description}`,
      completed: `${updatedTask.completed}`,
    },
  });
};

const deleteTask = async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  if (!deletedTask) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json({
    msg: `Deleted task with id:  ${req.params.id}`,
  });
};

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
};
