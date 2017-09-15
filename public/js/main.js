angular.module('app', ['ngRoute'])
.config(function($routeProvider, $locationProvider, $httpProvider) {
	
	$httpProvider.interceptors.push('tokenInterceptor');

	$routeProvider
	.when('/receitas', {
		templateUrl: 'partials/receita.html',
		controller: 'ReceitaController'
	})
	.when('/receitas/:id', {
		templateUrl: 'partials/receitaDetails.html',
		controller: 'ReceitaController'
	})
	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	})
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	})
	.when('/cadastrar', {
		templateUrl: 'partials/cadastroLogin.html',
		controller: 'CadastroLoginController'
	})
	.when('/logout', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	})
	.otherwise({redirectTo: '/receitas'});

	$locationProvider.html5Mode(true);
});