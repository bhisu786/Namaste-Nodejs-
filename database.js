// PassWord For the Mongodb :- "/"

const {MongoClient} = require("mongodb");


const url = "mongodb+srv://balharabhisham:Password@cluster0.7vefpjn.mongodb.net/NamasteNodeJS";

const client  = new MongoClient(url);


const dbName ="HelloWorld";
 

 async function main() {
    await client.connect();
 console.log('Connected successfully to Server');
 const db =  client.db(dbName);
 const collection = db.collection('Users');

 
 const Data  ={
    first_name:"Bhisham ",
    last_name:"Balhara",
    city:"Panipat",
    phoneNumber:"9876543210",
 };
   
  const insertResult = await collection.insertOne(Data);
  console.log("Inserted Documents =>",insertResult);

  // Readd the document
  const findResult =await collection.find({}).toArray();
  console.log("Found Documents =>",findResult);

  const countResult =await collection.countDocuments({});
   console.log("Count of Documents in the user Collection =>",countResult);

   // find all the documents with a filter of First_Name :Bhisham


  //  COUNT  is depreciated in mongodb in newest update of MONGODB...
  
   // const result =await collection.find({first_name:"Bhishu"}).count();
   // console.log("result=> ",result);
     
   const result = await collection.countDocuments({first_name: "Bhishu"});
console.log("result =>", result); 
   return "done";

 }

 main()
 .then(console.log)
 .catch(console.error)
 .finally(()=>client.close());

 
