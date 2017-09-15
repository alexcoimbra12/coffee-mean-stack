angular.module('app').factory('tokenInterceptor', function ($location, $window, $q) {
	
	var interceptor = {};

	interceptor.response = function(response) {
		
		var token = response.headers('x-access-token');

		if(token) {
			$window.sessionStorage.token = token;
			console.log('Token Armazenado no navegador');
		}
		
		return response;
	};

	interceptor.request = function(config) {
		config.headers = config.headers || {};

		if($window.sessionStorage.token) {
			config.headers['x-access-token'] = $window.sessionStorage.token;
		}

		return config;
	}

	interceptor.responseError = function(rejection) {
		if(rejection != null && rejection.status == 401) {
			delete $window.sessionStorage.token;
			$location.path('/login');
		}

		return $q.reject(rejection);
	}

	return interceptor;
});