var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
	server: {
		reconnectTries: Number.MAX_VALUE
	}
});

mongoose.connection.on('connected', function () {
	console.log('Connected DB');
});

mongoose.connection.on('error', function(error) {
	console.log('Erro to connnect DB: ' + error);
});

mongoose.connection.on('disconnected', function() {
	console.log('Disconnected DB');
});

process.on('SIGINT', function() {

	mongoose.connection.close(function() {
		console.log('Connection Closed');
		process.exit(0);
	});
});