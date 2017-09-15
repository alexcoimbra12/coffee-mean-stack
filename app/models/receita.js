var mongoose = require('mongoose');

var schema = mongoose.Schema({

	title: {
		type: String,
		require: true
	},
	img: {
		type: String,
		require: true
	},
	shortDescription: {
		type: String,
		require: true
	},
	longDescription: {
		type: String,
		require: true
	},
	ingredientes: {
		type: [String],
		require: true
	},
	prepareMode: {
		type: String,
		require: true
	}

}, 
{
	collection: 'receitas'
});

mongoose.model('Receita', schema);