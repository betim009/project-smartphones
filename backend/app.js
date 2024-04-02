const express = require('express');
const cors = require('cors');
const { getAll, create, updateById, deleteById } = require('./routes/phones');

const app = express();

app.use(cors());
app.use(express.json());

// rota phones
app.get('/phones', getAll);
app.post('/phones', create);
app.put('/phones', updateById);
app.del('/phones/', deleteById);

module.exports = app;