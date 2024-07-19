const express = require('express');
const cors = require('cors');
const phonesRoute = require('./src/routes/phones');
const userRoute = require('./src/routes/users');
const salesRoute = require('./src/routes/sales')

const app = express();


app.use(cors());
app.use(express.json());

app.use('/phones', phonesRoute);
app.use('/users', userRoute);
app.use('/sales', salesRoute);

module.exports = app;