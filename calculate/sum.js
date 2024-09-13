// modules protect their variables and functuions from leaking

// console.log("Sum module executed");

//  var x  = "hello World";

 // ES modules 
 require("../xyz.js");
 
 function calculateSum(a,b) {
    const sum =  a+b;

    console.log(sum);
}

// module.exports = {x,calculateSum};
module.exports = {calculateSum};