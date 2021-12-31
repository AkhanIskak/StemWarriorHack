const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: "./configuration.env"});
app.use(express.json());
app.use(express.static('/public'))
app.listen(process.env.PORT,()=>console.log(`server is listening on port ${process.env.PORT}`))