var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Receita');

api.list = function (req, res) {
	
	console.log('chegou')
	model.find(function(error, receitas) {
		if(error) {
			res.status(500).json(error);
		}
		res.json(receitas);
	});

};

api.findById = function (req, res) {

	model.findById(req.params.id, function(error, receita) {
		if(error) {
			res.status(500).json(error);
		}
		res.json(receita);
	}); 
};

module.exports = api;