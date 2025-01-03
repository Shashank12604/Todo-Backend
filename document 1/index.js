const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());


const todoRoutes =require("./routes/todos");

app.use("/api/v1", todoRoutes);
// Catch-all route for 404 errors
app.use((req, res) => {
    console.log("Route not found:", req.method, req.url);
    res.status(404).send("Route not found");
});


app.listen(PORT,()=>{
    console.log(`server started successfully at port ${PORT}`)
});

const dbConnect = require("./config/database");

dbConnect();

app.post("/",(req,res) =>{
    res.send(`<h1> this is homepage </h1>`);
})