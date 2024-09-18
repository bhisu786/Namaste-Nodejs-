const fs = require('node:fs');
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE=8;


// EASY WAY TO SIMPLY UNDERSTAND THE STRUCTURE OF THE CRYPTO.PBKDF:-
// const crypto = require('crypto');

// const password = 'secret';
// const salt = 'salt';
// const iterations = 1000;
// const keylen = 64;
// const digest = 'sha512'; // Correct digest algorithm

// crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
//   if (err) throw err;
//   console.log(derivedKey.toString('hex'));
// });


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
