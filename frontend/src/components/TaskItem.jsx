import {
  Checkbox,
  IconButton,
  Input,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import {
  deleting,
  fetching,
  updateUsingCheckBox,
  updating,
} from "../taskService";
import { useSetRecoilState } from "recoil";
import { taskAtom } from "../recoil/atom/taskAtom";

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);
  const setTasks = useSetRecoilState(taskAtom);

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");

  const checkHandler = async () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    const finalResponse = async () => {
      const result = await updateUsingCheckBox(task._id, newCompleted);
      console.log(result);
    };
    finalResponse().then(async () => {
      const updatedData = await fetching();
      setTasks(updatedData);
    });
  };

  const iconButtonHandler = async () => {
    const deleted = async () => {
      const result = await deleting(task._id);
      console.log(result);
    };
    deleted().then(async () => {
      const updatedData = await fetching();
      setTasks(updatedData);
    });
  };

  const handleEditToggle = () => {
    setIsEditing(true);
  };
  const handleChange = (e) => {
    setEditedText(e.target.value);
  };
  const handleEditSubmit = async () => {
    setIsEditing(false);
    const [newTitle, ...descParts] = editedText.split(":");
    const newDescription = descParts.join(":").trim();

    console.log(newTitle.trim());
    console.log(newDescription);

    await updating(task._id, newTitle.trim(), newDescription);
    const updatedData = await fetching();
    setTasks(updatedData);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditSubmit();
    }
  };

  return (
    <ListItem
      sx={{ display: "flex", justifyContent: "space-between" }}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      <Checkbox checked={completed} onChange={checkHandler}></Checkbox>
      {!isEditing ? (
        <Typography
          onClick={handleEditToggle}
          sx={{ cursor: "pointer" }}
          component="span"
        >
          {task.title} : {task.description}
        </Typography>
      ) : (
        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={`${task.title} : ${task.description}`}
        ></TextField>
      )}

      <IconButton onClick={iconButtonHandler} color="error">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
