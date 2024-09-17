const fs =  require("fs");

const a = 100;

setImmediate(() => console.log("SetImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("File reading CB");
});

setTimeout(()=>console.log("TIMER EXPIRED"));

process.nextTick(()=>console.log("Process_nextTick"));

function printA() {
    console.log("a=",a);
}

printA();
console.log("last Line of the file");