import Container from "@mui/material/Container";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { fetching } from "../taskService";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskAtom } from "../recoil/atom/taskAtom";

const TaskList = () => {
  const setTasks = useSetRecoilState(taskAtom);
  const tasks = useRecoilValue(taskAtom);

  useEffect(() => {
    const finalResponse = async () => {
      const response = await fetching();
      console.log(response);
      setTasks(...tasks, response);
    };
    finalResponse();
  }, []);

  return (
    <Container fixed maxWidth="sm">
      <List>
        {tasks.map((task) => {
          return <TaskItem key={task._id} task={task} />;
        })}
      </List>
    </Container>
  );
};

export default TaskList;
