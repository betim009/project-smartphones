const connection = require("../../db/connection");

// Função para inserir uma nova venda
const insertSale = async (sale) => {
    const { phone_id, sale_date, quantity, total_price } = sale;
    const [result] = await connection.execute(
        'INSERT INTO sales (phone_id, sale_date, quantity, total_price) VALUES (?, ?, ?, ?)',
        [phone_id, sale_date, quantity, total_price]
    );
    return result
};

const selectAllSales = async () => {
    const [result] = await connection.execute(
        `SELECT sales.*, phones.name, phones.brand, phones.model
        FROM sales
        JOIN phones ON sales.phone_id = phones.id`
    );

    return result;
}

module.exports = {
    insertSale,
    selectAllSales
};