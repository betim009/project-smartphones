const express = require('express');
const { findAllPhones, findPhoneById } = require('../controllers/phones');


const router = express.Router();

router.get('/', findAllPhones);
router.get('/:id', findPhoneById);
// router.post('/');
// router.put('/:id');
// router.delete('/:id');

module.exports = router;