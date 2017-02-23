angular.module('starter')
.controller("HomePageController", function($scope, $state, $ionicModal) {
	// $scope.logout = function() {
	// 	$state.go('login');
	// }

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

	$ionicModal.fromTemplateUrl('../modals/holdModal.html', {
	scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.holdModal = modal;
	});
	$scope.openHoldModal = function() {
		$scope.holdModal.show();
	};
	$scope.closeHoldModal = function() {
		$scope.holdModal.hide();
	};
	// Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.holdModal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
	// Execute action
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	// Execute action
	});

	$ionicModal.fromTemplateUrl('../modals/logoutModal.html', {
	scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.logoutModal = modal;
	});
	$scope.openLogoutModal = function() {
		$scope.logoutModal.show();
	};
	$scope.closeLogoutModal = function() {
		$scope.logoutModal.hide();
	};
	// Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.logoutModal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
	// Execute action
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	// Execute action
	});
});