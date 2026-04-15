const fs = require("fs")
const os = require("os")

console.log(os.cpus().length);


//Sync... Blocking Operation
// fs.writeFileSync("./test.txt","Hey there!")

// //Async.... Non-Blocking Operation.  (Preferred way to write code)
// fs.writeFile("./test.txt","Hello")

// console.log(1);
// fs.readFile("./test.txt","utf8",(err,data)=>{
//     console.log(data);
// })
// console.log(2);
// console.log(3);


//Default value of Thread Pool is 4;

