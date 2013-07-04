
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();
// all environments
app.set('port', process.env.PORT || 7000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.cookieParser('tt_note'));
app.use(express.bodyParser());
//app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var server = http.createServer(app);
var io = require('socket.io').listen(server);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

if ('production' == app.get('env')) {
	io.enable('browser client etag');
	io.set('log level', 1);
	app.use(express.errorHandler());
}

//var config = require('./conf');
//
//console.log('config: '+ config.param(app.get('env')).uc_url);


require('./routes/canvas')(app);
require('./lib/socket')(io);
//pages = require('./routes/routes_page')(app);
//app.get('/', routes.index);
//app.get('/list',routes.note_json);

server.listen(app.get('port'), function(){
	  console.log('TT Note server listening on port ' + app.get('port') + ' , environment: ' +process.env.NODE_ENV);
});

