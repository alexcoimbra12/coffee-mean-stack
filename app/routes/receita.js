var api = require('../api/receita');

module.exports = function(app) {
	
	app.route('/v1/receitas')
		.get(api.list);

	app.route('/v1/receitas/:id')
		.get(api.findById);
};