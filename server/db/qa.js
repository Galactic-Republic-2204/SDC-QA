const {Client} = require('pg');
require('dotenv').config();

// const client=new Client({
//   user: process.env.pguser,
//   host: process.env.pghost,
//   database: process.env.pgdatabase,
//   port: process.env.pgport,
//   password: process.env.password
//  })

 const client=new Client({
  user: process.env.qa_user,
  host: 'localhost',
  database: process.env.qa_database,
  port: 5432
 })

 client.connect(function (err) {
   if(err) {
     throw err;
   }
   console.log('connected!')
 });

 module.exports=client;