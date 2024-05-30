const express = require('express');
const { 
    getAllPhones,
    getPhoneById,
    getPhoneByPage } = require('../controllers/phones');


const router = express.Router();

router.get('/', getAllPhones);
router.get('/:id', getPhoneById);
router.get('/page/:page?', getPhoneByPage);
// router.post('/');
// router.put('/:id');
// router.delete('/:id');

module.exports = router;