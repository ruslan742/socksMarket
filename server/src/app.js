const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const meetingsRouter = require('./router/meetings.router');
const authRouter = require('./router/auth.router');
const tokensRouter = require('./router/tokens.router');
const namesRouter = require('./router/names.router');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.use('/api/meetings', meetingsRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/names', namesRouter);

module.exports = app;
