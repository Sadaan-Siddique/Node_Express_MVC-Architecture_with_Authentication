const express = require('express');
const  route  = require('./Routes/router');

const routes_middleWares = express();

routes_middleWares.use('/path',route);


module.exports = routes_middleWares;