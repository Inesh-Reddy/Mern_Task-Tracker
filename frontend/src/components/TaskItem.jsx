import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task }) => {
  return (
    <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
      <Checkbox></Checkbox>
      <Typography component="span">
        {task.title} : {task.description}
      </Typography>
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
