//      Requires
const express = require('express');
const  getRoute = require('./Routes/getRoute');
const postRoute = require('./Routes/postRoute');

//      Execution
const routes_middleWares = express();

//      Middle Wares 
routes_middleWares.use('/get',getRoute);
routes_middleWares.use('/post',postRoute);

routes_middleWares.get('/',(req,res)=>{
    console.log('GET');
    res.status(200).send('GET Route');
})
routes_middleWares.post('/',(req,res)=>{
    console.log(req.body)
    res.status(200).send('POST Route');
})

//      Export
module.exports = routes_middleWares;