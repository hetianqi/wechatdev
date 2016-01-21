/**
 * homeController
 */
var Database = require('../libs/Database');

exports.index = function (req, res) {
	res.view();
}

exports.contact = function (req, res) {
	var db = new Database('quanxian');

	res.view();
}

module.exports = exports;