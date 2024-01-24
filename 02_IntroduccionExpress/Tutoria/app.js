const express = require('express');
const app = express();
const routes = require('./src/routes/index');
const morgan = require('morgan');
const cors = require('cors');

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);


module.exports = app;
