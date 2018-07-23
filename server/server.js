const http = require('http');
const mysql =require('mysql');
const app = require('./nodeApp');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server created at port: ' + port);
});

const con = mysql.createConnection({
  host: "127.0.0.1",
  // your mysql username and password goes here
  user: "root",
  password: "password",
  database: "onlineStore"
});

con.connect((err) => {
  if(err) throw err;
  console.log("MySQL Connection Established.");
});
