const connection = require('./db/connection');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// rota phones
app.get('/phones', async (req, res) => {
    const [results] = await connection.execute(
        'SELECT * FROM phones'
    );
    
    const data = {
        "total": results.length,
        "results": results
    };

    return res.status(200).json(data);
})

module.exports = app;