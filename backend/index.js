const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(
  cors({
    methods: ["GET"],
    origin: "http://localhost:5173",
  })
);

const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.json(`Task Tracker API`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port : ${PORT}`);
});
