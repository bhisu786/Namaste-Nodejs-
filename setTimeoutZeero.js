console.log("Hello World");

var a =  10792645;
var b =2097645;

setTimeout(() => {
    console.log("call me ASAP")
},3000 );

function multiplyFn(x,y) {
    const result =  a *b;
    return result;
}

var c = multiplyFn(a,b);

console.log("Multiply result is :  ",c) ;
