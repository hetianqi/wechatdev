/**
 * homeController
 */
var request = require('../libs/mssql-con')('name');

exports.index = function (req, res) {
	res.view();
}

exports.contact = function (req, res) {
	

	res.view();
}

module.exports = exports;