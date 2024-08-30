const { createSale, getAllSales } = require("../../services/sales");


const readSales = async (_req, res) => {
    const data = await getAllSales();
    return res.status(200).json(data);
};

const postSale = async (req, res) => {
    const sale = req.body;

    const data = await createSale(sale);



    return res.status(200).json(data);
}

module.exports = {
    postSale,
    readSales
};