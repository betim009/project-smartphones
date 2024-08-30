const connection = require('../db/connection.js');

async function getAll(req, res) {
    const [results] = await connection.execute(
        'SELECT * FROM phones'
    );

    const data = {
        "total": results.length,
        "results": results
    };

    return res.status(200).json(data);
};

async function create(req, res) {
    const { name, brand, model, price, color } = req.body;

    const [results] = await connection.execute(
        `INSERT INTO phones (name, brand, model, price, color)
            VALUES (?, ?, ?, ?, ?)`,
        [name, brand, model, price, color]);

    return res.status(200).json({ "result": "Create phone" });
};

async function updateById(req, res) {
    const { id, name, brand, model, price, color } = req.body;

    const [results] = await connection.execute(
        `UPDATE phones
            SET name = ?, brand = ?, model = ?, price = ?, color = ?
            WHERE id = ?`,
        [name, brand, model, price, color, id]);

    return res.status(200).json({ "result": "Update phone" });
};

function deleteById(req, res) {
    const { id } = req.body;

    const result = connection.execute(
        'DELETE FROM phones WHERE id = ?',
        [id]
    );

    return res.status(200).json({ "result": "Phone deleted" });
};

module.exports = {
    getAll,
    create,
    updateById,
    deleteById
}