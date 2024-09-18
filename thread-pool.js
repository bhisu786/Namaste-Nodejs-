const fs = require('node:fs');
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE=8;

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=> {
  console.log("1-CryptoPBKDF2 DONE");
});

// fs.readFile("./file.txt","utf-8",()=>{
// console.log("file Reading CB");
// });


crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=> {
    console.log("2-CryptoPBKDF2 DONE");
  });


  crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=> {
    console.log("3-CryptoPBKDF2 DONE");
  });


  crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=> {
    console.log("4-CryptoPBKDF2 DONE");
  });