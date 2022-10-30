import mysql from 'mysql2';
//const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : '@Jack2000',
  database: 'customers'
}).promise()

const insert =  await pool.query("INSERT INTO customer_tbl (username, email, phoneNo, password) VALUES ( 'JackSaw', 'jack@gmail.com', 79795576, '1324fsd')");
const  result =   await pool.query("SELECT * FROM customer_tbl");
console.log(result[0]);
