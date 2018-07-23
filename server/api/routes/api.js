const express = require('express');
const router = express.Router();
const con = require('../../server.js')

router.get('/getChairs' , (req, res, next) =>{
    con.con.query('SELECT * FROM chairs',function(err, result, fields){
        if (err) throw err;
        console.log(result);
        res.status(200).json(
            result
        );
    });
});

router.get('/getElectronics' , (req, res, next) =>{
    con.con.query('SELECT * FROM electronics',function(err, result, fields){
        if (err) throw err;
        console.log(result);
        res.status(200).json(
            result
        );
    });
});


router.post('/updateUsers', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    con.con.query("INSERT INTO `users` (`id`, `username`, `password`) VALUES ('', username, password); ", function(err, result, fields){
        if (err) throw err;
        console.log(result);
        res.send('Successfully inserted users ');
    })

});

module.exports = router;
