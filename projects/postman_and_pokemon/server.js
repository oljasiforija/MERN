const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api", (req,res)=>{
    res.json({message:"hey"})
})
app.get("/api/pokemon/:name", (req,res)=>{
    res.json({message:`the Pokemon isssss ${req.params.word}`})
})

app.listen(port, ()=>console.log("hey there"))
