const express = require("express");
const { PORT } = require("./config");

const app = express();

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})

app.get("/",(req,res)=>{res.send("<h1>Hello World</h1>")})