//    Requires
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//    Execution
const app = express();

//    Middle Wares
app.use(express.json());






//     Server Start
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server started at Port ${port}`)
})