

module.exports = function (io) {

	io.sockets.on('connection', function(socket){
		
		
/*
		socket.on('c', function(message) {
			var coord_message = {
				c: message
			};
			socket.broadcast.to(socket.room).emit('c', coord_message);
		});

		socket.on('addroom',function(room){
			console.log('add room   room = %s',room);
			socket.room = room;
			socket.join(room);
		});
		socket.on('turnpage',function(room){
			socket.broadcast.to(room).emit('turnpage',room);
		});
		
		socket.on('message', function(message){
			socket.broadcast.to(socket.room).emit('message', message);
		});
*/
		/*
		socket.on('key down', function(data){
			socket.broadcast.to(socket.room).emit('key down', data);
		});

		socket.on('key up', function(data){
			socket.broadcast.to(socket.room).emit('key up', data);
		});

		socket.on('flowtime minimap complete', function(data){
			socket.broadcast.to(socket.room).emit('flowtime minimap complete', data);
		});

		socket.on('navigate', function(data){
			socket.broadcast.to(socket.room).emit('navigate', data);
		});
		*/

		socket.on('disconnect', function(){
			socket.leave(socket.room);
			console.log("Connection " + socket.id + " terminated.");
		});

	});	
	
};


