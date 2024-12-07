const express = require('express');

const app = express();

app.use("/home",(req,res)=>{
    res.send('Om Namah Shivaya');
});
app.use("/hi",(req,res)=>{
res.send("Joy Maa Kali");
});


app.listen(7777,()=>{
console.log("Server started with 7777 port number....");
});

