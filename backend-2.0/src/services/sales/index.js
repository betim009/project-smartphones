const { insertSale, selectAllSales } = require("../../models/sales");

const createSale = async (sale) => {
    const data = await insertSale(sale);



    const result = {
        "id": data.insertId,
        "message": "Created"
    }

    return result;
};

const getAllSales = async () => {
    const data = await selectAllSales();

    const result = {
        "total": data.length,
        "sales": data
    };

    return result;
}

module.exports = {
    createSale,
    getAllSales
};