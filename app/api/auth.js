module.exports = function(app) {

	var mongoose = require('mongoose');
	var jwt = require('jsonwebtoken');
	var api = {};
	var model = mongoose.model('User');


	api.autenticar = function (req, res) {
		
		model
			.findOne({
				login: req.body.login,
				password: req.body.senha
			})
			.then(function(user) {
				if(!user) {
					console.log('Login ou senha invalidos');
					res.sendStatus(401);
				} else {
					var token = jwt.sign({login: user.login}, app.get('secret'), {
						expiresIn: 84600
					});

					console.log('Token criado e enviado no header');
					res.set('x-access-token', token);
					res.set('name', user.firstName);
					res.set('mail', user.mail);
					res.end();
				}
			}, function(error) {
				console.log('Login ou senha invalidos');
				res.sendStatus(401);
			});	
	};

	api.verificaToken = function(req, res, next) {

		var token = req.headers['x-access-token'];
		if(token) {
			console.log('Verificando Token');
			jwt.verify(token, app.get('secret'), function(error, decoded) {
				if(error){
					console.log('Token Invalido');
					res.sendStatus(401);
				}
				req.user = decoded;
				next();
			});
		} else {
			console.log('Token nao enviado');
			res.sendStatus(401);
		}

	};

	module.exports = api;
};
