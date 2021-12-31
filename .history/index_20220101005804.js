const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: "./configuration.env"});
app.use(express.json());

app.listen()