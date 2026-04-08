const express = require("express");
const app = express();
const PORT = 4000;

app.get("/",(req,res)=>{
    res.send("hello my server is live, method = get")
})
app.post("/",(req,res)=>{
    res.send("hello my server is live, method = post")
})
app.put("/",(req,res)=>{
    res.send("hello my server is live, method = put")
})
app.patch("/",(req,res)=>{
    res.send("hello my server is live, method = patch")
})
app.delete("/",(req,res)=>{
    res.send("hello my server is live, method = delete")
})
//start server
app.listen(PORT,()=>{
   console.log(`server is live at http://localhost:${PORT}`);
})



