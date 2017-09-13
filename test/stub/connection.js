'use strict';

const fixtures = require('../fixtures');
class Connection {
	connect() {
		return Promise.resolve(true);
	}

	disconnect() {
		return Promise.resolve(true);
	}

	insert(dbTable, record) {
		return Promise.resolve(fixtures.getProduct());
	}

	get(dbTable) {
		return Promise.resolve(fixtures.getProducts());
	}
}

module.exports = Connection;
