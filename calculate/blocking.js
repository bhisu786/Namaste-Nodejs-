const crypto = require("node:crypto");

console.log("hello world..!!!");

var  a = 10231231231;
var  b =  21323213;

// pbkd2 -- Password based Key  Derivatve Function
// synchronous Function :- will block the main thread -- DONT USE IT 

//  crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
//  console.log("First Key is Generated"); 

  
// ansynchronous function 
console.log("========");
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log(" Second Key is generated");
});

function multiplyFn(x,y) {
    const result = a+b;
    return result;
}
var c = multiplyFn(a,b);

console.log("Mutliplication result is :  ",c);