const express = require('express');
const { postSale, readSales } = require('../controllers/sales');

const router = express.Router();

router.get('/', readSales)
router.post('/', postSale);


module.exports = router;