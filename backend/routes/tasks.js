const express = require("express");
const {
  getAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
