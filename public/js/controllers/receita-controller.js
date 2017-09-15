angular.module('app').controller('ReceitaController', function ($scope, $rootScope, $location, $routeParams, $http) {
	
	$rootScope.title = 'Receitas';
	
	$scope.receita = {};

	$scope.receitas = {};

	$scope.loading = true;


	if($routeParams.id) {
		$http.get('/v1/receitas/' + $routeParams.id)
			.then(function(data) {
				$scope.loading = false;
				$scope.receita = data.data;
			})
			.catch(function(error) {
				console.log('erro' + error);
			});
	} else {

		$http.get('/v1/receitas/')
		.then(function(data) {
			$scope.loading = false;
			$scope.receitas = data.data;
		})
		.catch(function(error) {
			console.log('erro' + error);
		});
	}

});