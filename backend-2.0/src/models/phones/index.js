const connection = require("../../db/connection");

async function selectAll() {
    const [results] = await connection.execute(
        'SELECT * FROM phones'
    );

    return results;
};

const selectId = async (id) => {
    const [[result]] = await connection.execute(
        'SELECT * FROM phones WHERE id = ?',
        [id]
    );
    return result;
};

const selectPage = async (count, page) => {
    // Executa a consulta SQL com LIMIT e OFFSET
    const [result] = await connection.execute(
        `SELECT * FROM phones LIMIT ${count} OFFSET ${page}`
    );
    return result;
};

module.exports = {
    selectAll,
    selectId,
    selectPage
};