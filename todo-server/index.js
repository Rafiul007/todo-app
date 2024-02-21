const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const todoRoutes = require("./routes/todoRoutes")
app.use(bodyParser.json());

app.get('/', (req, res) => {
     res.send({ message: 'React-ReduxToolkit-todo-app' });
});
app.use("/api", todoRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

