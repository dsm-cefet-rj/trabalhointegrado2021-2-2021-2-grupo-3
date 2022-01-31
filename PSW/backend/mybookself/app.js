
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var livrosRouter = require('./routes/livros');
var chatRouter = require('./routes/chat')

const url = "mongodb://localhost:27017/test"
const connect = mongoose.connect(url) 

connect.then( db => console.log("Mongo conectado"))
.catch( err => console.log(err))

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/livros', livrosRouter);
app.use('/chat', chatRouter);

module.exports = app;
