const express = require('express')
const mysql = require("mysql")
const app = express();
const port = 8000;
const connection = require('./dbretrieve')

// Initialise API for geolocation and set-up web server

app.use(express.static(__dirname));

app.get('/api/sensorball/geolocation', function(req,res) {
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

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/dashboardSB1.html");
})

app.listen(port, () => {
  console.log(`Cool app listening on port ${port}!`);
});