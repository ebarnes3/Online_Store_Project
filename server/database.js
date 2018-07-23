// td: Add check to see if statement exists here
// For testing, drops old db first
//con.query("DROP DATABASE IF EXISTS onlinestore",(err, result) => {
//  if (err) throw err;
//});

// Create Database if first time
con.query("CREATE DATABASE IF NOT EXISTS onlinestore",(err, result) => {
  if (err) throw err;
});

con.query("CREATE TABLE onlinestore.User (username VARCHAR(255), password VARCHAR(255))",(err, result) => {
  if (err) throw err;
});
