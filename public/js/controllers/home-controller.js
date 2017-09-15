angular.module('app').controller('HomeController',function ($rootScope) {
	
	$rootScope.title = 'Bem-Vindo';
	$rootScope.login = {
		title: 'Sair',
		value: '/logout'
	}

	$rootScope.isLogin = true;
});