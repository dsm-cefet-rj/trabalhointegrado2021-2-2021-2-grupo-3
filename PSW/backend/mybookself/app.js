
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var cors = require('cors');

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var livrosRouter = require('./routes/livros');
var chatRouter = require('./routes/chat');
var proprietarioRouter = require('./routes/proprietario');
var usersRouter = require('./routes/users');

const url = "mongodb://localhost:27017/test"
const connect = mongoose.connect(url) 

connect.then( db => console.log("Mongo conectado"))
.catch( err => console.log(err))

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12345-67890-73567-54321'));

app.use(session({
    name: 'session-id',
    secret: '12345-67890-73567-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

function auth (req, res, next) {
    console.log(req.session);

    if(!req.session.user) {
        var err = new Error('Você não está autenticado!')
        err.status = 403;
        return next(err);
    } else {
        if(req.session.user === 'authenticated') {
            next();
        } else {
            var err = new Error('Você não está autenticado!')
            err.status = 403;
            return next(err);
        }
    }
}

app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/livros', livrosRouter);
app.use('/chat', chatRouter);
app.use('/usuario', proprietarioRouter);


module.exports = app;
