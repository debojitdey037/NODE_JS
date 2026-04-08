const fs = require("fs")
// fs.writeFile("/Users/debojitdey./Desktop/NodeJS/Lec01/script.js") //Absolute path
// fs.writeFile("Lec01/script.js") //relative path
console.log("start");

fs.writeFile("Lec01/first.txt","hello this is line 1","utf-8",(err)=>{
    console.log(err);
    
})
fs.readFile("Lec01/first.txt","utf-8",(err,data)=>{
    console.log(data);
    
})
// to write in file -> this adds the data at last position 
fs.appendFile("Lec01/first.txt","\nhello this is line 2","utf-8",(err)=>{
    console.log(err);
    
})
console.log("end");
