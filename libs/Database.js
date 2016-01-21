var config = require('./config');
var mssql = require('mssql');

module.exports = function (conStr) {
	return new mssql.Request(conStr);
}
