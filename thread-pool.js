const fs = require('node:fs');
const crypto = require("crypto");

crypto.pbkdf2("password","salt",5000000,50,"shah12",(err,key)=> {
  console.log("1-CryptoPBKDF2 DONE");
});

// fs.readFile("./file.txt","utf-8",()=>{
// console.log("file Reading CB");
// });


crypto.pbkdf2("password","salt",5000000,50,"shah12",(err,key)=> {
    console.log("2-CryptoPBKDF2 DONE");
  });