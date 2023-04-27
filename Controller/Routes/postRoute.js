const express = require('express')
const dbConnection = require('../../Model/dbConnection')
const jwt = require('jsonwebtoken')
require('dotenv').config();
// console.log(process.env.SECRET_KEY);


const secret_key = process.env.SECRET_KEY;
const postRoute = express.Router();
const userModel = dbConnection.userModel
const userSchema = dbConnection.userSchema


postRoute.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send('POST Route');
})

postRoute.post('/signUp', async (req, res) => {
    try {
        if (req.body.userName && req.body.password) {
            const userName_output = await userModel.findOne({ userName: req.body.userName });
            const password_output = await userModel.findOne({ password: req.body.password });
            if (userName_output !== null) {
                res.status(409).send('User Already Exist');
            }
            else if (password_output !== null) {
                res.status(409).send('User Already Exist');
            }
            else {
                console.log(req.body);
                const newUser = new userModel({
                    userName: req.body.userName,
                    password: req.body.password
                });
                const save_output = await newUser.save();
                const token = jwt.sign({ id: save_output._id, userName: save_output.userName, password: save_output.password }, secret_key)
                res.status(200).json({
                    token,
                    save_output,
                    msg: 'You have Signed in Successfully'
                });
            }
        } else {
            res.status(404).send('Data Not Recieved');
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }

})

postRoute.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).send('This is login');
})

module.exports = postRoute;