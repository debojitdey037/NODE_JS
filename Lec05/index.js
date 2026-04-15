const express  = require("express")
const app = express()
const PORT = 4000;
//to get path of any system
const path = require("path")
const {v4:uuid} = require("uuid")
//npm init
//npm i express 
//sudo npm i -g nodemon
//npx nodemon index.js

//npm i uuid
app.use(express.json());
//used to send request 

//absolute path of public folder
// app.use(express.static("/Users/debojitdey./Desktop/NodeJS/Lec05/todoApp/Public"))
app.use(express.static(path.join(__dirname,"Public")))

const TODOS = [];

app.get("/todo/all",(req,res)=>{
    try {
      res.status(200).json({message:"todo fetched",todos:TODOS})
    }catch(error) {
      console.log(error);
      res.status(500).json({message:error.message})
    }
})


app.post("/todo/create",(req,res)=>{
    try{
      const task = req.body.task
      const todo = {
        id:uuid(),
        task:task,
        status:false,
        createdAt : new Date().toLocaleTimeString()
      }
      TODOS.unshift(todo);
      res.status(201).json({message:"todo created",todos:TODOS})
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message})
        
    }
})
app.listen(PORT,(req,res)=>{
    console.log(`server is live at http://localhost:${PORT}`);
})