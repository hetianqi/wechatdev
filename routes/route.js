var fs = require('fs');

module.exports = function (app, ctrlPath) {
	//路由入口，分发给各个控制器
	app.all('*', function (req, res) {
		var reqPath = req.path.split('/');
		var controller = reqPath[1] || 'home';
		var action = reqPath[2] || 'index';

		if (fs.existsSync(ctrlPath + controller + '.js')) {
			var route = require(ctrlPath + controller);
			
			if (typeof route[action] == 'function') {
				//扩展渲染视图的方法
				res.view = function (name, options, callback) {
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