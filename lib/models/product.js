'use strict';

const Connection = require('./db/connection');
const config = require('./db/config');
const ConnectionStub = require('../../test/stub/connection');
const env = process.env.NODE_ENV || 'production';
let connection = new Connection(config);
if (env == 'test') {
	connection = new ConnectionStub();
}

class Product {
	constructor() {
		this.dbTable = 'products';
	}

	async saveProduct(product) {
		await connection.connect();
		let created = await connection.insert(this.dbTable, product);
		await connection.disconnect();
		return Promise.resolve(created);
	}

	async getProducts() {
		await connection.connect();
		let products = await connection.get(this.dbTable);
		await connection.disconnect();
		return Promise.resolve(products);
	}
}

module.exports = Product;
