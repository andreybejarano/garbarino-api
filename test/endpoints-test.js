'use strict';

const test = require('ava');
const request = require('request-promise');
const fixtures = require('./fixtures');

test('POST /api/products/save', async t => {
	let product = fixtures.getProduct();
	let options = {
		method: 'POST',
		uri: 'http://localhost:3000/api/products/save',
		json: true,
		body: {
			'name': product.name,
			'price': product.price,
			'list_price': product.list_price,
			'brand': product.brand,
			'category_id': product.category_id,
			'virtual': product.virtual
		},
		resolveWithFullResponse: true
	};

	let response = await request(options);

	t.is(response.statusCode, 201);
	t.deepEqual(response.body, product);
});

test('GET /api/products/list', async t => {
	let products = fixtures.getProducts();

	let options = {
		method: 'GET',
		uri: 'http://localhost:3000/api/products/list',
		json: true
	};
	let body = await request(options);
	t.deepEqual(body, products);
});
