
var mssql = require('mssql');
var config = require('../lib/config');

function Database(confName) {
	this.confName = confName;
}

Database.prototype.query = function(sql, cb) {
	var connection = new mssql.Connection(config.db[this.confName], function(err) {
		//连接错误处理
    	if (err) {
    		cb(err);
    		return;
    	}

	    var request = new mssql.Request(connection);
	    request.query(sql, function(err, data) {
	        cb(err, data, request);
	        connection.close();
	    });
	});

	connection.on('error', function(err) {
	    cb(err);
	});
}

module.exports = Database;