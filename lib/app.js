const expressApp = require('express')();
const bodyParser = require('body-parser');
const config = require('./config');
const morgan = require('morgan');
const basePatch = '/api/';

expressApp.use(morgan('dev'));

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.disable('x-powered-by');

expressApp.use(basePatch, require('./routers/api-routes'));

expressApp.listen(config.port, () => {
	console.log(`server started on port ${config.port}`);
});

module.exports = expressApp;
