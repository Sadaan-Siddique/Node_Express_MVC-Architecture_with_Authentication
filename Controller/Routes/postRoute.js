const express = require('express')

const postRoute = express.Router();


postRoute.post('/',(req,res)=>{
    console.log(req.body)
    res.status(200).send('POST Route');
})

postRoute.post('/signUp',(req,res)=>{
    console.log(req.body);
    res.status(200).send('This is SignUp');
}) 

postRoute.post('/login',(req,res)=>{
    console.log(req.body);
    res.status(200).send('This is login');
}) 

module.exports = postRoute;