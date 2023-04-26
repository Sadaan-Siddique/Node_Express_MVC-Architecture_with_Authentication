const express = require('express');
const dbConnection = require('../../Model/dbConnection')
const getRoute = express.Router();

// console.log(dbConnection);

getRoute.get('/',(req,res)=>{
    console.log('GET');
    res.status(200).send('GET Route');
})

getRoute.get('/get_users',async(req,res)=>{
    const output = await dbConnection.userModel.find({})
    console.log(output);
    res.status(200).json({msg:'Users'})
})

// function index(req,res){
//     console.log('Index Route');
//     res.send('This is Index Route Function');
// }

// const getRoute={
//     index,
// }

module.exports = getRoute;