var path = require('path');
var fs = require('fs');
var config = require('../lib/config');

module.exports = function(app) {
	//路由入口，分发给各个控制器
	app.all('*', function (req, res) {
		var reqPath = req.path.split('/');
		var controller = reqPath[1] || config.route.controller;
		var action = reqPath[2] || config.route.action;
		var ctrlPath = path.join(__dirname, '../controllers/');
		console.log(req.path)
		if (fs.existsSync(ctrlPath + controller + '.js')) {
			var route = require(ctrlPath + controller);
			
			if (typeof route[action] == 'function') {
				//扩展渲染视图的方法
				res.view = function(name, options, callback) {
					if (typeof name == 'object') {
						callback = options;
						options = name;
						name = controller + '/' + action;
					} else if (typeof name == 'function') {
						callback = name;
						name = controller + '/' + action;
					} else if (typeof name == 'undefined') {
						name = controller + '/' + action;
					}

					res.render(name, options, callback);
				}

				route[action](req, res);
			} else {
				res.render('404');
			}
		} else {
			res.render('404');
		}
	});
}