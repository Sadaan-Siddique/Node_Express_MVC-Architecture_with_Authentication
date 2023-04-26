const express = require('express');

const get = express.Router();

get.get('/index',(req,res)=>{
    console.log('Index Route');
    res.send('This is Index Route GET');
})

get.get('/second',(req,res)=>{
    console.log('Second Route');
    res.send('This is Second Route GET');
})

// function index(req,res){
//     console.log('Index Route');
//     res.send('This is Index Route Function');
// }

// const get={
//     index,
// }

module.exports = get;