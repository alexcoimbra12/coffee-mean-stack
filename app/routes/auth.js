var api = require('../api/auth');

module.exports = function(app) {
	
	app.post('/autenticar', api.autenticar);
	app.use('/v1/*', api.verificaToken);
	app.use('/home', api.verificaToken);	
};