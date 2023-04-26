//         Requires
const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.DB_LINK);
// console.log(process.env.SECRET_KEY);


function db() {
    //         DB Connection Start
    mongoose.connect(process.env.DB_LINK);

    mongoose.connection.on('error', (error) => {
        console.log(error);
    })
    mongoose.connection.once('connected', () => {
        console.log('Database Connected');
    })
    //         DB Connection End

}
//         Schema Start
const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    }
})
//         Schema End

//         Model Start
const userModel = new mongoose.model('jwt_users', userSchema);
//         Model End

module.exports = {
    db,
    userSchema,
    userModel
};
