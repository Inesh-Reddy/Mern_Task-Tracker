import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [data, setData] = useState([]);

  async function getName() {
    try {
      const response = await axios.get("http://localhost:3000/api/tasks/");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getName();
  }, []);

  return (
    <Container fixed maxWidth="sm">
      <List>
        {data.map((task) => {
          return <TaskItem key={task._id} task={task} />;
        })}
      </List>
    </Container>
  );
};

export default TaskList;
