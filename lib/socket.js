

module.exports = function (io) {
	
	var user_sockets = {};

	io.sockets.on('connection', function(socket){
		
		socket.on('message',function(msg){
			console.log(msg);
			setTimeout(function(){
				socket.send('server send msg to client.');
			},5000);
		});
		
		socket.on('new_user',function(data){
			console.log(data.uid + ' connected.');
			user_sockets[data.uid] = socket;
		});
		
		
		socket.on('chat_msg',function(data){
			console.log(data);
//			user_sockets[msg.to].emit('to_client',msg);
			var to = data.to;
			console.log('to : ' + to);
			client = user_sockets[to];
			client.emit('to_client',data);
		});
		
		
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
			//socket.leave(socket.room);
			console.log("Connection " + socket.id + " terminated.");
		});

	});	
	
};


