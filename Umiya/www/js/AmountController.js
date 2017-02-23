angular.module('starter')
.controller("AmountController", function($scope, $state) {
	$scope.continue = function() {
		$state.go('homepage');
	}
});