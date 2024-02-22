const mongoose = require("mongoose");
require('dotenv').config();
const db = "mongodb://127.0.0.1:27017/todoApp";

const conn = () => {
    mongoose.connect(db)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while MongoDB Conn..', err);
    })
};

module.exports = conn;