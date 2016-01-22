/**
 * homeController
 */
var mssql = require('mssql');
var config = require('../lib/config');
var Database = require('../lib/Database');

exports.index = function (req, res) {
	res.view();
}

module.exports = exports;