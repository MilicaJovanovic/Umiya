angular.module('starter')
.controller("LoginController", function($scope, $state) {
	$scope.username = {
		value : ""
	}
	$scope.password = {
		value : ""
	}

	//TO DO, replace static login check with login logic
	$scope.login = function() {
		if ($scope.username.value === 'admin' &&
			$scope.password.value === 'admin') {
			$state.go('amount');
		} else {
			alert("Username or password is not correct!");
		}
	}
});