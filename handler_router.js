var express=require('express');
var connection = require('./dbretrieve.js')
var mysql = require("mysql")

var app=express();

app.get('/api/sensorball/geolocation',function(req,res) {
    new Promise(function (resolve, reject) {
        var sql = "SELECT * from ??;";
        var inserts = ['positions'];
        sql = mysql.format(sql, inserts);

        connection.query(sql, function (err, result) {
            if (err) return reject(err);

            const content = JSON.stringify(result);
            res.send(content);

            resolve(result);
         });
    })
    
});

var server=app.listen(3000,function() {});