const fs  = require('fs');

setImmediate(()=> console.log("setImmediate"));

setTimeout(() => {
    console.log("Timer Expired")
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=> {
    setTimeout(()=> console.log("2nd Timer"),0);

    process.nextTick(()=>console.log("2nd NextTick"));

    setImmediate(()=> console.log("2nd Setimmeidate"));

    console.log("FILE READING CB");

});

process.nextTick(()=>console.log("nextTick"));

console.log("Last Line of the File");