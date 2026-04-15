const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}.${req.url}New request Received\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url) {
            case "/" :
                res.end(Homepage)
                break;
            case "/about" :
                res.end("Server is live")
                break;
            default :
                res.end("404 not found")
        }
    })
})
myServer.listen(4000, () => console.log("Server is Live"))