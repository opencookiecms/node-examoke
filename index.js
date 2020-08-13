const express = require("express");
const app = express();
const importJson = require("./data.json");

let port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/team", (req, res) =>{
   res.send(importJson); 
})

app.listen(port, () =>{
    console.log(`listing on port :"${port}`);
});