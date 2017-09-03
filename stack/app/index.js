const express = require('express');
const app = express();
const redis = require('redis');

app.get('/', function(req,res){
    res.send('Hello');
})

app.listen(3000, function() {
    console.log('app running');
})