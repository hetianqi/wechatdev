
var mssql = require('mssql');
var config = require('../lib/config');

function Database(confName) {
	this.confName = confName;
}

Database.prototype.query = function(sql, cb) {
	var connection = new mssql.Connection(config.db[this.confName], function(err) {
    	if (err) {
    		cb(err);
    	}

	    var request = new mssql.Request(connection);
	    request.query(sql, function() {
	        cb.call(null, arguments);
	    });
	});

	connection.on('error', function(err) {
	    cb(err);
	});
}

module.exports = Database;