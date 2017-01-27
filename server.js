var express = require("express");
var fs=require('fs');
var convertDate = require("./util/convertDate");
var app = express();


app.get('/', function (req,res){
    res.set('content-type','text/html');
    res.send(fs.readFileSync(__dirname+'/index.html','utf8'));
    res.end();
});

app.get('/:data', function (req,res){
    res.send(convertDate(req.params.data));
});


app.listen(8080,function (){
   console.log("Example app listening on port 8080");
});
