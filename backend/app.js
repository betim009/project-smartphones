const express = require('express');
const cors = require('cors');
const { getAll, create, updateById, deleteById } = require('./routes/phones');
const connection = require('./db/connection');

const app = express();


app.use(cors());
app.use(express.json());

// rota phones
app.get('/phones', getAll);
app.post('/phones', create);
app.put('/phones', updateById);
app.del('/phones/', deleteById);

// rota sales
app.get('/sales', async (req, res) => {
    const [results] = await connection.execute(
        'SELECT * FROM sales'
    );
    
    const data = {
        "total": results.length,
        results,
    };

    res.status(200).json(data);
});

module.exports = app;