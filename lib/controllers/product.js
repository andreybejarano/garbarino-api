'use strict';

const Product = require('../models/product');
const ProductModelStub = require('../../test/stub/productModel');
const env = process.env.NODE_ENV || 'production';
let model = new Product();
if (env == 'test') {
	model = new ProductModelStub();
}

class ProductController {
	static getProducts(req, res) {
		model.getProducts()
			.then((products) => {
				res.json(products);
			})
			.catch((error) => {
				res.status(error.statusCode).json(error);
			});
	}

	static saveProduct(req, res) {
		model.saveProduct(req.body)
			.then((response) => {
				res.status(201).json(response);
			})
			.catch((error) => {
				res.status(error.statusCode).json(error);
			});
	}
}

module.exports = ProductController;
