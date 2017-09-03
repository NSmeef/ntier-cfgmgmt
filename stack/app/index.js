const path = require("path");
const express = require('express');
const app = express();
const redis = require('redis'),
    client = redis.createClient(6379, "db")

app.use('/static', express.static(path.join(__dirname, '/www/public')))
    
app.get('/', function(req,res){
    var data = []
    client.keys("*", function(err, replies) {
        // reply is null when the key is missing
        var data = []
        replies.forEach(function (reply, index) {
            data.push(reply.toString());
        });      

        res.send(data);
    });
})

app.get('/setKeys', function(req,res){
    client.set(req.query.value, req.query.value);    
})

app.listen(3000, function() {
    console.log('app running');
})