angular.module('starter')
.controller("HomePageController", function($scope, $state) {
	$scope.logout = function() {
		$state.go('login');
	}

	$scope.products = [
		{
			productName: 'Fanta',
			volume: 200,
			price: 15
		},
		{
			productName: 'Pepsi',
			volume: 220,
			price: 13
		},
		{
			productName: 'Fanta',
			volume: 100,
			price: 7
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		}
	]
});