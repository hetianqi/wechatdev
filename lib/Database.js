var mssql = require('mssql');
var config = require('../lib/config');

module.exports = function (name) {
	mssql.connect(config.db[name]);
	return new mssql.Request();
}