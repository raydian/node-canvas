(function($){
	var socket = io.connect();
	var canvas = $('#canvas');
	
	function initial_socket(){
		socket.on('connect', function () {
			console.log('connected');
			socket.send('client connected response.');
		});
		
		socket.on('message',function(msg){
			console.log(msg);
		});
		
		socket.on('disconnect', function() {
			console.log('disconnected');
		});
		
	}
	
	function bind_canvas_event(){
		
	}
	
	

	initial_socket();

    
})($);