var express=require("express");
var bp=require("body-parser"); // used for sending some data to client

var app=express();

app.use(bp.json());

app.use(express.static(__dirname));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8080);

console.log("Client server now running on 8080");
