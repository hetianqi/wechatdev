var fs = require('fs');
var mssql = require('mssql');
var xml2js = require('xml2js');

module.exports = function (conStr) {
	var xml = fs.readSync('../web.config');
	var parser = new xml2js.Parser();
	

	return 11;
}
