const { selectAll, selectId, selectPage } = require("../../models/phones");

async function findAll() {
    const results = await selectAll();
    
    const data = {
        "total": results.length,
        "results": results
    };

    return data;
}

async function findById(id) {
    const results = await selectId(id);

    return results;
}

async function findPage(count, page) {
    const results = await selectPage(count, page);
    return results;
}

module.exports = {
    findAll,
    findById,
    findPage
};