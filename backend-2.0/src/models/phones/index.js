const connection = require("../../db/connection");

async function selectAll() {
    const [results] = await connection.execute(
        'SELECT * FROM phones'
    );

    return results;
};

const selectId = async (id) => {
    const [[user]] = await connection.execute(
        'SELECT * FROM phones WHERE id = ?',
        [id]
    );
    return user;
};

// async function create(req, res) {
//     const { name, brand, model, price, color } = req.body;

//     const [results] = await connection.execute(
//         `INSERT INTO phones (name, brand, model, price, color)
//             VALUES (?, ?, ?, ?, ?)`,
//         [name, brand, model, price, color]);

//     return res.status(200).json({ "result": "Create phone" });
// };

// async function updateById(req, res) {
//     const { id, name, brand, model, price, color } = req.body;

//     const [results] = await connection.execute(
//         `UPDATE phones
//             SET name = ?, brand = ?, model = ?, price = ?, color = ?
//             WHERE id = ?`,
//         [name, brand, model, price, color, id]);

//     return res.status(200).json({ "result": "Update phone" });
// };

// function deleteById(req, res) {
//     const { id } = req.body;

//     const result = connection.execute(
//         'DELETE FROM phones WHERE id = ?',
//         [id]
//     );

//     return res.status(200).json({ "result": "Phone deleted" });
// };

module.exports = {
    selectAll,
    selectId,
};