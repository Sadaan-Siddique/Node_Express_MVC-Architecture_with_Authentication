const express = require('express');
const  get = require('./Routes/get');

const routes_middleWares = express();

routes_middleWares.use('/path',get);

routes_middleWares.post('/post',(req,res)=>{
    console.log(req.body)
    res.status(200).send('This is Post');
})

module.exports = routes_middleWares;