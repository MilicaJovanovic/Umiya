angular.module('starter')
.controller("LoginController", function($scope, $state) {
	$scope.login = function() {
		$state.go('amount');
	}
});