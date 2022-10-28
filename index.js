const express = require('express');
//const mongoose = require('mongoose');
//const cors = require('cors');
const dotenv = require('dotenv')
const app = express();
dotenv.config();

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})