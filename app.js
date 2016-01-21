//依赖包
var express = require('express');
var path = require('path');

//变量
var app = express();
var port = process.env.PORT || 3000;
var ctrlPath = path.join(__dirname, 'controllers/');

app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public/')));

app.listen(port, function () {
	console.log('app is running on port:' + port);
});

require('./routes/route')(app, ctrlPath);