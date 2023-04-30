const express = require('express')
const userSchema = require('../../Model/userSchema')
const jwt = require('jsonwebtoken')
require('dotenv').config();
// console.log(process.env.SECRET_KEY);


const secret_key = process.env.SECRET_KEY;
const postRoute = express.Router();
const userModel = userSchema.userModel;


postRoute.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send('POST Route');
})

//        CRUD Operation

//        Create & Read
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
                const newUser = new userModel({
                    userName: req.body.userName,
                    password: req.body.password
                });
                const save_output = await newUser.save();
                console.log(save_output);
                const token = jwt.sign({
                    id: save_output._id,
                    userName: save_output.userName,
                    password: save_output.password
                }, secret_key)
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

//      Read
postRoute.post('/login', async (req, res) => {
    try {
        if (req.body.userName && req.body.password) {
            const output = await userModel.findOne({ userName: req.body.userName });
            if (output) {
                if (output.userName === req.body.userName && output.password === req.body.password) {
                    console.log(output);
                    const token = jwt.sign({
                        id: output._id,
                        userName: output.userName,
                        password: output.password
                    }, secret_key)
                    res.status(200).json({
                        token,
                        output,
                        msg: 'You have Logged In Successfully'
                    });
                } else {
                    res.status(401).send('Incorrect Password');
                }
            } else {
                res.status(404).send('Username not Found');
            }
        } else {
            res.status(404).send('Data Not Recieved');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
})

//      Update
postRoute.post('/update', async (req, res) => {
    try {
        if (req.body.userName) {
            const output = await userModel.findOne({ userName: req.body.userName });
            if (!output) {
                res.status(404).send("User Not Found");
            } else {
                output.password = req.body.password;
                const updated_output = await output.save();
                res.status(200).json({ msg: 'Updation Successfully', updated_output });
            }
        } else {
            res.status(404).send('Username Not Received');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})


module.exports = postRoute;