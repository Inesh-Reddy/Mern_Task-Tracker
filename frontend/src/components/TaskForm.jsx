import { Box, Button, Container, Input } from "@mui/material";
import { useRef } from "react";
import { adding, fetching } from "../taskService";
import { useSetRecoilState } from "recoil";
import { taskAtom } from "../recoil/atom/taskAtom";

const TaskForm = () => {
  const setTasks = useSetRecoilState(taskAtom);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const taskHandler = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    const tasks = async () => {
      const response = await adding(title, description);
      console.log(response.data.msg);
    };

    tasks().then(async () => {
      const updatedData = await fetching();
      setTasks(updatedData);
    });
  };

  return (
    <Container fixed maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Input inputRef={titleRef} placeholder="Title">
          Title
        </Input>
        <Input inputRef={descriptionRef} placeholder="Description">
          Description
        </Input>
        <Button onClick={taskHandler} variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </Container>
  );
};

export default TaskForm;
