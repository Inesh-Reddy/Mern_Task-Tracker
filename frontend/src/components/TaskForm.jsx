import { Box, Button, Container, Input } from "@mui/material";

const TaskForm = () => {
  return (
    <Container fixed maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Input placeholder="Title">Title</Input>
        <Input placeholder="Description">Description</Input>
        <Button variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </Container>
  );
};

export default TaskForm;
