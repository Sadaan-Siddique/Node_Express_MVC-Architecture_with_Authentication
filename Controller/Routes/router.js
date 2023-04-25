const express = require('express');

const router = express.Router();

router.get('/index',(req,res)=>{
    console.log('Index Route');
    res.send('This is Index Route GET');
})

router.get('/second',(req,res)=>{
    console.log('Second Route');
    res.send('This is Second Route GET');
})

// function index(req,res){
//     console.log('Index Route');
//     res.send('This is Index Route Function');
// }

// const router={
//     index,
// }

module.exports = router;