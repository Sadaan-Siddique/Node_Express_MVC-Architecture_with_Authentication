//    Requires
const express = require('express');
const cors = require('cors');
const routes_middleWares = require('./Controller/routes_middleWares.js');
const dbConnection = require('./Model/dbConnection.js')
require('dotenv').config();

//    Execution
const app = express();

//    Middle Wares
dbConnection.db();
app.use(cors());
app.use(express.json());
app.use('/', routes_middleWares)







//     Server Start
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at Port ${port}`)
})