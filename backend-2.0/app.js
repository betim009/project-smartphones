const express = require('express');
const cors = require('cors');
const phonesRoute = require('./src/routes/phones')

const app = express();


app.use(cors());
app.use(express.json());

app.use('/phones', phonesRoute);

module.exports = app;