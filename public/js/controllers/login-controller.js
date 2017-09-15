angular.module('app').controller('LoginController', function ($rootScope, $scope, $location, $window, $http) {
	
	$rootScope.title = 'Login';
	$rootScope.login = {
		title: 'Login',
		value: '/login'
	};

	$rootScope.isLogin = false;

	$scope.user = {};
	$scope.message = '';

	if($location.$$path == '/logout') {
		delete $window.sessionStorage.token;
		$rootScope.isLogin = false;
	}


	$scope.autenticar = function() {
		$scope.loading = true;
		var user = $scope.user;

		$http.post('/autenticar', 
			{login: user.login, senha: user.password}) 
			.then(function(data) {
				$location.path('/home');
				$rootScope.userName = data.headers('name');
				$rootScope.userMail = data.headers('mail');
				$scope.loading = false;
			}, function(error) {
				console.log(error);
				$scope.message = 'Login ou senha invalidos';
				$scope.loading = false;
			});
	};
});