import axios from "axios";
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import { Box, Typography } from "@mui/material";
import { RecoilRoot } from "recoil";

function App() {
  const [data, setData] = useState("");

  async function getName() {
    try {
      const response = await axios.get("http://localhost:3000/");
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
    <>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h4">Task Tracker</Typography>
        <h2>{data.message}</h2>
        <RecoilRoot>
          <Box sx={{ margin: 2, padding: 2 }}>
            <TaskForm />
            <TaskList />
          </Box>
        </RecoilRoot>
      </Box>
    </>
  );
}

export default App;
