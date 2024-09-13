 require("./xyz.js"); 
//  require("./sum")
const sum = require('./calculate/sum.js');


 const util = require("node:util");
 

//import { x ,calculateSum } from "./sum.js";
//  const {x,calculateSum} = require("./sum.js");

//  const calculateMultiply =  require("./calculate/multiply.js");

const {calculateSum ,calculateMultiply} = require("./calculate");

var name ="NAMASTE NODEjs";

const data = require("./data.json");

console.log(JSON.stringify(data));

var a = 10; 
var b =20;

 // z = "hello world"; it cannot work in strict mode  

  
// console.log(name);
// console.log(a+b); 
calculateSum(a,b);
calculateMultiply(a,b);

// console.log(global);


// console.log(this);  // Empty object 

//  console.log(globalThis=== global);


// const global = (typeof window !== 'undefined') ? window : (typeof global !== 'undefined') ? global : this;
// console.log(x);