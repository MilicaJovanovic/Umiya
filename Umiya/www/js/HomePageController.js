angular.module('starter')
.controller("HomePageController", function($scope, $state) {
	$scope.logout = function() {
		$state.go('login');
	}
});