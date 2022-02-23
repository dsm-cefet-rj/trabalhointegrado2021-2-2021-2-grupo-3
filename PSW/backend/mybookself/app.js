var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose')

var comprarRouter = require('./routes/compraDoLivro')
var loginRouter = require('./routes/login')
var livrosRouter = require('./routes/livros');
var chatRouter = require('./routes/chat');
var proprietarioRouter = require('./routes/proprietario');

const auth = require('./middleware/jwt')

const url = "mongodb://localhost:27017/test"
const connect = mongoose.connect(url) 

connect.then( db => console.log("Mongo conectado"))
.catch( err => console.log(err))

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/login', loginRouter)
app.use('/usuario', proprietarioRouter);

app.use(auth);
app.use('/livros', livrosRouter);
app.use('/chat', chatRouter);
app.use('/compradolivro', comprarRouter);


module.exports = app;
