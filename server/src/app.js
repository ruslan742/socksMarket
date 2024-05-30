const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const socksRouter = require('./router/socks.router');
const authRouter = require('./router/auth.router');
const tokensRouter = require('./router/tokens.router');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/socks', socksRouter);

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);


module.exports = app;