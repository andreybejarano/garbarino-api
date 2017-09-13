'use strict';

const fixtures = require('../fixtures');

class Product {
	saveProduct(product) {
		return Promise.resolve(fixtures.getProduct());
	}

	getProducts() {
		return Promise.resolve(fixtures.getProducts());
	}
}

module.exports = Product;
