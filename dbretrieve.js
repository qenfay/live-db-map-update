"use strict";
//creating a mysql pool for the a shared instance of db connection in whole application
var mysql = require('mysql');
var fs = require('fs')

// TODO: Set to environment variables, which is more efficient and secure
var HOST = "127.0.0.1"
var USER = "root"
var PASSWORD = "seecs@123"
var DB = "agritech"
var PORT = "3306"

var connection = mysql.createPool({
   host: HOST,
   user: USER,
   password: PASSWORD,
   database: DB,
   port: PORT,
   connectionLimit: 100,
   connectTimeout: 60 * 60 * 1000,
   acquireTimeout: 60 * 60 * 1000,
   supportBigNumbers: true,
   bigNumberStrings: true,
   charset: 'utf8mb4_unicode_ci',
   multipleStatements: true,
});

module.exports = connection;

