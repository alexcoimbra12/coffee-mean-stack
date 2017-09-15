var mongoose = require('mongoose');

var schema = mongoose.Schema({

	firstName: {
		type: String,
		require: true
	},
	lastName: {
		type: String,
		require: true
	},
	login: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	mail: {
		type: String,
		require: true
	}

}, 
{
	collection: 'user'
});

mongoose.model('User', schema);