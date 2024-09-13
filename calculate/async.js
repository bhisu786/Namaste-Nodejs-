const fs =  require("node:fs");// synchronous 

const  https = require("https");
// const { resourceLimits } = require("worker_threads");

console.log("hello world"); // synchronous 

var a = 107894;

var  b =  20986;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Fetched data Successfully");
});

setTimeout(()=> {
    console.log("setTimeout called after 5 seconds")}, 5000  );
        
    // synchrnous ::  this functon blocks the main thread...
    fs.readFileSync("./file.txt","utf-8");
    console.log("this will only execute only after the file read....!!!!")

        fs.readFile("./file.txt","utf8",(err,data) =>{
            console.log("File Data :",data);
        });
     
        function multiplyFn(x,y) {
            const result = a+b ;
            return result;
        }

        var c = multiplyFn(a,b);
        console.log("Multiplication  result  is ::  ",c);
