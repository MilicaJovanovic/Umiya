angular.module('starter')
.controller("AmountController", function($scope, $state, $localStorage) {
	$scope.amount = {
		value : ""
	}

	$scope.continue = function() {
		$localStorage.amount = $scope.amount.value;
		$state.go('homepage');
	}
});