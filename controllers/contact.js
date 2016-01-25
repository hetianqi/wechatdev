
/**
 * contactController
 */
var Database = require('../lib/Database');

exports.index = function(req, res) {
	res.view();
}

exports.getAllList = function(req, res) {
	var db = new Database('quanxian');
	var msg = '';
	var state = true;

	var sql = 'select t1.gh, t1.xingming, t3.mingcheng bm \
from yuangong t1 left join yg_bm t2 on t1.yg_id = t2.ygid left join bm t3 on t2.bmid = t3.id';
	
	db.query(sql, function(err, data) {
		if (err) {
			state = false;
			msg = err;
		}

		res.json({
			msg: msg,
			state: state,
			data: data
		});
	});
}

exports.detail = function(req, res) {
	var db = new Database('quanxian');
	var msg = '';
	var state = true;

	var gh = req.query.gh;
	var sql = 'select top 1 t1.gh, t1.xingming, t3.mingcheng bm, t1.sex, t1.CompanyMail, t1.mobile, t1.tel1, t1.tel2 \
from yuangong t1 left join yg_bm t2 on t1.yg_id = t2.ygid left join bm t3 on t2.bmid = t3.id \
where t1.gh = ' + gh;
	
	db.query(sql, function(err, data) {
		if (err) {
			state = false;
			msg = err;
		}

		res.json({
			msg: msg,
			state: state,
			data: data[0]
		});
	});
}