//依赖包
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//变量
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public/')));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function () {
	console.log('app is running on port:' + port);
});

require('./routes/route')(app);