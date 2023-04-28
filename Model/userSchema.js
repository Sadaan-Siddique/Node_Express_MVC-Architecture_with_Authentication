const mongoose = require('mongoose');

//         Schema Start
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})
//         Schema End

//         Model Start
const userModel = new mongoose.model('jwt_users', userSchema);
//         Model End

module.exports = {
    userModel
};
