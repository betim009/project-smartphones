const { findAll, findById, findPage } = require("../../services/phones");

async function getAllPhones(_req, res) {
    const data = await findAll();
    return res.status(200).json(data);
};

async function getPhoneById(req, res) {
    const { id } = req.params;

    const data = await findById(id);
    return res.status(200).json(data);
};

async function getPhoneByPage(req, res) {
    // Obtém o número da página a partir dos parâmetros da rota
    const page = req.params.page || 1; // se não tiver retonar 1

    // Define o número de resultados por página
    const resultsPerPage = 5;

    // Calcula o deslocamento com base na página atual
    const offset = (page - 1) * resultsPerPage;

    const data = await findPage(resultsPerPage, offset);
    return res.status(200).json(data);
};

module.exports = {
    getAllPhones,
    getPhoneById,
    getPhoneByPage
};