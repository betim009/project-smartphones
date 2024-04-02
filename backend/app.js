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
});

app.post('/phones', async (req, res) => {
    const { name, brand, model, price, color } = req.body;

    const [results] = await connection.execute(
        `INSERT INTO phones (name, brand, model, price, color)
        VALUES (?, ?, ?, ?, ?)`,
        [name, brand, model, price, color]);

    return res.status(200).json({ "result": "Create phone" });
});

app.put('/phones', async (req, res) => {
    const { id, name, brand, model, price, color } = req.body;

    const [results] = await connection.execute(
        `UPDATE phones
        SET name = ?, brand = ?, model = ?, price = ?, color = ?
        WHERE id = ?`,
        [name, brand, model, price, color, id]);

    return res.status(200).json({ "result": "Update phone" });
});

app.del('/phones/', async (req, res) => {
    const { id } = req.body;

    const result = connection.execute(
        'DELETE FROM phones WHERE id = ?',
        [id]
    );

    const [rows] = await connection.execute(
        'SELECT * FROM phones ORDER BY id'
    );

    for (let i = 0; i < rows.length; i++) {
        await connection.execute(
            'UPDATE phones SET id = ? WHERE id = ?',
            [i + 1, rows[i].id]
        );
    }
    return res.status(200).json({ "result": "Phone deleted" });
});

module.exports = app;