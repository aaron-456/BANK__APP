const express = require('express');
const usersRouter = require('./routes/users.routes');
const tranfersRouter = require('./routes/transfers.routes');

const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', tranfersRouter);
module.exports = app;
