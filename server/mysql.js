const express = require('express');
const mysql = require('mysql');

exports.con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "onlinestore"
});
