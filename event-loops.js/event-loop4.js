const fs = require("fs");

setImmediate(()=> console.log("setimmdeiate"));

setTimeout(()=> console.log("time expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile(".file.txt","utf8",()=>{
    console.log("reading file cb");
});
process.nextTick(()=>{
    process.nextTick(()=> console.log("inner nextTrick"));
    console.log("nexttick");
});

console.log("last line of the File");