const mongoose = require('mongoose');

//     Schema Start
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:String
    }
})
//     Schema End

//     Model Start
const productModel = new mongoose.model('products',productSchema);
//     Model End

module.exports = {
    productModel
};
