//middleware
const express = require("express")
const app = express()
const PORT = 4000

//inbuilt middleware
app.use(express.json())

//custom middleware
app.use((req,res,next)=>{
    console.log(req.path);
    console.log("custom middleware")
    next()
    // its works to pass the req to next middleware
})

app.get("/",(req,res)=>{
    res.send("hello from server")
})
//path specific middleware
//this will run for the API's which starts with "/user"
app.use("/user",(req,res,next)=>{
    console.log("user middleware")
    next()
})

//this will run for the API's which starts with "/product"
app.use("/product",(req,res,next)=>{
    console.log("product middleware")
    next()
    // its works to pass the req to next middleware
})


app.get("/user/:id/data",(req,res)=>{
    const params = req.params
    const id = params.id
    console.log("user",id)
    res.send(id)
})

app.get("/product/:id/data",(req,res)=>{
    const params = req.params
    const id = params.id
    console.log("product",id)
    res.send(id)
})

const routerLevel = (req,res,next)=>{
    console.log("router level")
    next()
    
}

app.get("/info",routerLevel,(req,res)=>{
    console.log("info api")
    res.send("report generated")
    
})

app.listen(PORT,() => console.log("server is running on port " + PORT))
