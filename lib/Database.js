var mssql = require('mssql');
var config = require('../lib/config');

function Database(confName) {
	this.confName = confName;
}

Database.prototype.query = function(sql, cb) {
	var connection = new sql.Connection(config.db[this.confName], function(err) {
    	if (err) {
    		cb(err);
    	}

	    var request = new sql.Request(connection);
	    request.query(sql, function(err, data) {
	    	console.log(arguments)
	        cb(err, data);
	    });
	});

	connection.on('error', function(err) {
	    cb(err);
	});
}

module.exports = Database;