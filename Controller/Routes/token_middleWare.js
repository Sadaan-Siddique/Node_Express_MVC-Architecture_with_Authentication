const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret_key = process.env.SECRET_KEY;

function validation(req, res, next) {
    try {
        if (req.headers) {
            if (req.headers.x_access_token) {
                const token = req.headers.x_access_token
                try {
                    const decoded = jwt.verify(token, secret_key);
                    if (decoded) {
                        req.headers.decoded_obj = decoded;
                        next();
                    } else {
                        res.status(498).send('Invalid Token');
                    }
                } catch (error) {
                    console.log(error);
                    res.status(498).send('Invalid Token');
                }
            } else {
                res.status(401).send('Token Missing');
            }
        } else {
            res.status(404).send('Headers Not Received');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = {
    validation
};