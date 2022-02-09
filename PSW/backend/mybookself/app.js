
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose')
const session = require('express-session')
const fileStore = require('session-file-store')(session)

var loginRouter = require('./routes/login')
var indexRouter = require('./routes/index');
var livrosRouter = require('./routes/livros');
var chatRouter = require('./routes/chat');
var proprietarioRouter = require('./routes/proprietario');

const url = "mongodb://localhost:27017/test"
const connect = mongoose.connect(url) 

connect.then( db => console.log("Mongo conectado"))
.catch( err => console.log(err))

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    session: "sessionId",
    secret: "SenhaUltraSecreta",
    saveUninitialized: false,
    resave: false,
    store: new fileStore()
}))

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

app.use('/', indexRouter);
app.use('/login', loginRouter)
app.use('/usuario', proprietarioRouter);

app.use(auth);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/livros', livrosRouter);
app.use('/chat', chatRouter);


module.exports = app;
