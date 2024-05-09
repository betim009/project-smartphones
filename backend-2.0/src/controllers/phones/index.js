const { findAll, findById } = require("../../services/phones");

async function findAllPhones(_req, res) {
    const data = await findAll();
    return res.status(200).json(data);
};

async function findPhoneById(req, res) {
    const { id } = req.params;

    const data = await findById(id);
    return res.status(200).json(data);
};

module.exports = {
    findAllPhones,
    findPhoneById
};