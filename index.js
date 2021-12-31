const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: "./configuration.env" });
const db = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);
mongoose
    .connect(db)
    .then(async () => {
        console.log("connected to database")
    });

app.use(express.json());
app.use(express.static('./public'))
app.post('/')



app.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));
