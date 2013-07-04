

module.exports = function (app) {
    app.get('/', proc.index);
};

var proc = {};

proc.index = function(req,res){
	res.render('index',{title:'abcd'});
};