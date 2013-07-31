

module.exports = function (app) {
    app.get('/', proc.pngtest);
    
    app.get('/pt',proc.pngtest);
    
    app.get('/ppt',proc.ppt_loader);
    
    app.get('/pshow',proc.pshow);
    
    app.get('/chat',proc.chat);
};

var proc = {};

proc.index = function(req,res){
	res.render('index',{title:'abcd',imgs:'http://file.ikeepu.com/source/30199772/jpg'});
};

proc.chat = function(req,res){
	var uid = req.query.uid;
	var to_uid = req.query.to;
	res.render('chat',{uid:uid,to_uid:to_uid});	
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

proc.ppt_loader = function(req,res){
	var http = require('http');
	var body = "";
	http.get("http://doc.tt139.com/preview/group2M000097wKgzCVF4Ft4EAAAAAAAAABRkf6095_M00_pptx.json", function(response) {
			  console.log("Got response: " + response.statusCode);
			  response.on('data', function (chunk) {
				  body += chunk;
			  });
			  response.on('end', function(){
				  console.log('end response, body length: ' + body.length);
				  res.send(body);
			  });
			}).on('error', function(e) {
			  console.log("Got error: " + e.message);
			});
	return;	
};

proc.pshow = function(req, res){
	var http = require('http');
	var body = "";
	var ppturl = req.query.docurl;
	if(!ppturl){
		ppturl = 'http://doc.tt139.com/preview/group2M000097wKgzCVF4Ft4EAAAAAAAAABRkf6095_M00_pptx.json';
	}
	
	if(ppturl){
		http.get(ppturl, function(response) {
				  console.log("Got response: " + response.statusCode);
				  response.on('data', function (chunk) {
					  console.log('buff length:' + chunk.length);
					  body += chunk;
				  });
				  response.on('end', function(){
					  console.log('end response, body length: ' + body.length);
					  var obj = JSON.parse(body);
					  obj.docurl = ppturl;
					  if(req.query.sty){
						  obj.sty = req.query.sty;						  
					  }else{
						  obj.sty = 'client';
					  }
					  res.render('pshow',obj);
					  //res.send(body);
				  });
				}).on('error', function(e) {
				  console.log("Got error: " + e.message);
				});
	}else{
		res.send('not ppt file.');
	}
	
};