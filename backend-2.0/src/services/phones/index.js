const { selectAll, selectId } = require("../../models/phones");

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

module.exports = {
    findAll,
    findById
};