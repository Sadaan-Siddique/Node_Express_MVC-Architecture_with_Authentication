//      Requires
const express = require('express');
const userSchema = require('../../Model/userSchema');
const productSchema = require('../../Model/productSchema');
const token_middleWare = require('./token_middleWare');

//      Execution
const getRoute = express.Router();
const userModel = userSchema.userModel;
const productModel = productSchema.productModel;
const validation = token_middleWare.validation;

//       Routes
getRoute.get('/', (req, res) => {
    console.log('GET');
    res.status(200).send('GET Route');
})

getRoute.get('/get_users', validation, async (req, res) => {
    const output = await userModel.find({});
    const decoded_obj = req.headers.decoded_obj;
    // console.log(decoded_obj);
    res.status(200).json({
        msg: 'Users',
        decoded_obj,
        users: output,
    });
})

getRoute.get('/get_products', validation, async (req, res) => {
    const output = await productModel.find({});
    const decoded_obj = req.headers.decoded_obj;
    // console.log(output);
    res.status(200).json({
        msg: 'Response',
        decoded_obj,
        products: output,

    });
})

// function index(req,res){
//     console.log('Index Route');
//     res.send('This is Index Route Function');
// }

// const getRoute={
//     index,
// }

module.exports = getRoute;
