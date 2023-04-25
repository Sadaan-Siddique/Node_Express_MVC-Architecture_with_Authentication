//    Requires
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routers = require('./Controller/Routes/router.js');
const routes_middleWares = require('./Controller/routes_middleWares.js');
//    Execution
const app = express();

//    Middle Wares
app.use(express.json());
app.use('/',routers);
app.use('/',routes_middleWares)






//     Server Start
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server started at Port ${port}`)
})