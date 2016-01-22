/**
 * homeController
 */
var mssql = require('mssql');
var config = require('../lib/config');
var Database = require('../lib/Database');

exports.index = function (req, res) {
	res.view();
}

exports.getAllList = function (req, res) {
	var db = new Database('quanxian');
	var msg = '';
	var state = true;
	
	db.query('select top 20 * from yuangong', function (err, data) {
		if (err) {
			state = false;
			msg = err;
		}

		res.json({
			msg: msg,
			state: state,
			data: data
		});
	});
}

module.exports = exports;