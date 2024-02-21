const mongoose = require("mongoose");
require('dotenv').config();
const db = process.env.MONGODB_URI;
const conn = () => {
    mongoose.connect(db)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while MongoDB Conn..', err);
    })
};

module.exports = conn;