'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/products/list', productController.getProducts);

router.post('/products/save', productController.saveProduct);

module.exports = router;
