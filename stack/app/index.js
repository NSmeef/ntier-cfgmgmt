const path = require("path");
const express = require('express');
const app = express();
const redis = require('redis'),
    client = redis.createClient(6379, "db")

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/www/index.html'));
    console.log('got');
})

app.listen(3000, function() {
    console.log('app running');
})