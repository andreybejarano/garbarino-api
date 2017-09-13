'use strict';

const test = require('ava');
const uuid = require('uuid-base62');
const r = require('rethinkdb');
const fixtures = require('./fixtures');
const Connection = require('../lib/models/db/connection');

test.beforeEach('Setup database', async t => {
	const dbName = `garbarino_bd_${uuid.v4()}`;
	const connection = new Connection({ db: dbName, setup: true });
	t.context.connection = connection;
	t.context.dbName = dbName;
	await connection.connect();
	t.true(connection.connected, 'should be connected');
});

test.afterEach.always('Clean database', async t => {
	let connection = t.context.connection;
	let dbName = t.context.dbName;

	await connection.disconnect();
	t.false(connection.connected, 'should be disconnected');

	let conn = await r.connect({});
	await r.dbDrop(dbName).run(conn);
});

test('Insert record', async t => {
	let connection = t.context.connection;
	t.is(typeof connection.insert, 'function', 'insert is function');
	let dbTable = 'products';
	let product = fixtures.getProduct();
	let created = await connection.insert(dbTable, product);
	t.is(created.name, product.name);
	t.is(created.price, product.price);
	t.is(created.list_price, product.list_price);
	t.is(created.brand, product.brand);
	t.is(created.category_id, product.category_id);
	t.truthy(created.virtual.toString());
});

test('Get records', async t => {
	let connection = t.context.connection;
	t.is(typeof connection.get, 'function', 'get is function');
	let dbTable = 'products';
	let products = fixtures.getProducts();
	let saveProducts = products.map(product => connection.insert(dbTable, product));
	let created = await Promise.all(saveProducts);
	let result = await connection.get(dbTable);
	t.is(created.length, result.length);
});
