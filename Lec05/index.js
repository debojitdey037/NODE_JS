const express  = require("express")
const app = express()
const PORT = 4000;
//to get path of any system
const path = require("path")
//npm init
//npm i express 
//sudo npm i -g nodemon
//npx nodemon index.js

//absolute path of public folder
// app.use(express.static("/Users/debojitdey./Desktop/NodeJS/Lec05/todoApp/Public"))
app.use(express.static(path.join(__dirname,"Public")))
app.get("/",(req,res)=>{
    res.send("server is live")
})
app.listen(PORT,(req,res)=>{
    console.log(`server is live at http://localhost:${PORT}`);
})