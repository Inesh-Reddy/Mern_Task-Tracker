import axios from "axios";
import { useEffect, useState } from "react";

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
      <h1>Task Tracker</h1>
      <h2>{data.message}</h2>
    </>
  );
}

export default App;
