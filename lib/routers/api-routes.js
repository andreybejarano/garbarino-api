'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/products', productController.getProducts);

router.post('/products', productController.saveProduct);

module.exports = router;
