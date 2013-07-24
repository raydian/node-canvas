

module.exports = function (app) {
    app.get('/', proc.pngtest);
    
    app.get('/pt',proc.pngtest);
};

var proc = {};

proc.index = function(req,res){
	res.render('index',{title:'abcd',imgs:'http://file.ikeepu.com/source/30199772/jpg'});
};


proc.pngtest = function(req,res){
	var fs = require("fs"),
    util = require("util");
	var mime = require("mime");
	var src = '../images/ggs.png';
	var data = fs.readFileSync(src).toString("base64");
	var dataUri = util.format("data:%s;base64,%s", mime.lookup(src), data);
//	var dataUri = util.format("<img src=\"data:%s;base64,%s\">", mime.lookup(src), data);
	
	res.render('index',{title:'abcd',imgs:dataUri});
};