var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
const dotenv = require('dotenv');
dotenv.config();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, 'public')))

const port = process.env.PORT;
var routing = require('./routes/router.js');
app.use('/', routing);
app.listen(port,function(){
    
    console.log("server start")
})