const test = require('ava');
const Product = require('../lib/models/product');
const fixtures = require('./fixtures');

test.beforeEach('instance Object products', t => {
	t.context.productObject = new Product();
});

test('Save product', async t => {
	let productObject = t.context.productObject;
	t.is(typeof productObject.saveProduct, 'function', 'saveProduct is a function');
	let product = fixtures.getProduct();
	let created = await productObject.saveProduct(product);
	t.deepEqual(product, created);
});

test('List all products', async t => {
	let productObject = t.context.productObject;
	t.is(typeof productObject.getProducts, 'function', 'getProducts is a function');
	let products = fixtures.getProducts();
	let result = await productObject.getProducts();
	t.deepEqual(products, result);
});
