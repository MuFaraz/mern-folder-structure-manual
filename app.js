var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/', express.static(path.join(__dirname, 'public')))


var routing = require('./routes/router.js');
// ...
app.use('/', routing);
app.listen(3001,function(){
    
    console.log("server start")
})