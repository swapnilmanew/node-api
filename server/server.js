const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    return res.json({data: "Hello World"});
})
app.listen(3000)