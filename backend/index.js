const express = require("express");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/",(req,res) => {
    res.send(`Task Tracker App`);
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port : 3000`);
})