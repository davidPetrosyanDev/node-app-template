var express = require('express')
var path = require('path');
var app = express()

app.set("view engine", "ejs");
app.use(express.static(__dirname, +"/build/public"))
app.set('views', path.join(__dirname, '/build/views'));

app.get('/', function(req, res){
    res.render("index")
})

app.listen(3000)