angular.module('starter')
.controller("HomePageController", function($scope, $state, $ionicModal) {
	$scope.realDate = new Date();
	$scope.logout = function() {
		$scope.closeLogoutModal();
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
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		},
		{
			productName: 'Cola',
			volume: 200,
			price: 17
		}
	]

	$scope.cart = [
		{
			productName : 'Fanta',
			quantity: 1,
			price: 15,
			total: 15
		},
		{
			productName : 'Cola',
			quantity: 2,
			price: 13,
			total: 26
		},
		{
			productName : 'Pepsi',
			quantity: 2,
			price: 15,
			total: 30
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		},
		{
			productName : 'Vodka',
			quantity: 3,
			price: 15,
			total: 45
		}
	]

	$scope.increaseQuantity = function(cartRow) {
		cartRow.quantity = cartRow.quantity + 1;
	}

	$scope.decreaseQuantity = function(cartRow) {
		if (cartRow.quantity > 1) {
			cartRow.quantity = cartRow.quantity - 1;
		}
	}

	$scope.cancel = function() {
		$scope.cart = [];
	}

	$scope.changeSelectionAll = function() {
		document.getElementById("menuBtnAll").className = "menuBarPart selectedPart";
		document.getElementById("menuBtnColdDrinks").className = "menuBarPart";
		document.getElementById("menuBtnCiggarete").className = "menuBarPart";
		document.getElementById("menuBtnWater").className = "menuBarPart";
		document.getElementById("menuBtnFood").className = "menuBarPart";
		document.getElementById("menuBtnDrink").className = "menuBarPart";
		document.getElementById("menuBtnBeer").className = "menuBarPart";
	}

	$scope.changeSelectionColdDrinks = function() {
		document.getElementById("menuBtnAll").className = "menuBarPart";
		document.getElementById("menuBtnColdDrinks").className = "menuBarPart selectedPart";
		document.getElementById("menuBtnCiggarete").className = "menuBarPart";
		document.getElementById("menuBtnWater").className = "menuBarPart";
		document.getElementById("menuBtnFood").className = "menuBarPart";
		document.getElementById("menuBtnDrink").className = "menuBarPart";
		document.getElementById("menuBtnBeer").className = "menuBarPart";
	}

	$scope.changeSelectionCiggarete = function() {
		document.getElementById("menuBtnAll").className = "menuBarPart";
		document.getElementById("menuBtnColdDrinks").className = "menuBarPart";
		document.getElementById("menuBtnCiggarete").className = "menuBarPart selectedPart";
		document.getElementById("menuBtnWater").className = "menuBarPart";
		document.getElementById("menuBtnFood").className = "menuBarPart";
		document.getElementById("menuBtnDrink").className = "menuBarPart";
		document.getElementById("menuBtnBeer").className = "menuBarPart";
	}

	$scope.changeSelectionWater = function() {
		document.getElementById("menuBtnAll").className = "menuBarPart";
		document.getElementById("menuBtnColdDrinks").className = "menuBarPart";
		document.getElementById("menuBtnCiggarete").className = "menuBarPart";
		document.getElementById("menuBtnWater").className = "menuBarPart selectedPart";
		document.getElementById("menuBtnFood").className = "menuBarPart";
		document.getElementById("menuBtnDrink").className = "menuBarPart";
		document.getElementById("menuBtnBeer").className = "menuBarPart";
	}

	$scope.changeSelectionFood = function() {
		document.getElementById("menuBtnAll").className = "menuBarPart";
		document.getElementById("menuBtnColdDrinks").className = "menuBarPart";
		document.getElementById("menuBtnCiggarete").className = "menuBarPart";
		document.getElementById("menuBtnWater").className = "menuBarPart";
		document.getElementById("menuBtnFood").className = "menuBarPart selectedPart";
		document.getElementById("menuBtnDrink").className = "menuBarPart";
		document.getElementById("menuBtnBeer").className = "menuBarPart";
	}

	$scope.changeSelectionDrink = function() {
		document.getElementById("menuBtnAll").className = "menuBarPart";
		document.getElementById("menuBtnColdDrinks").className = "menuBarPart";
		document.getElementById("menuBtnCiggarete").className = "menuBarPart";
		document.getElementById("menuBtnWater").className = "menuBarPart";
		document.getElementById("menuBtnFood").className = "menuBarPart";
		document.getElementById("menuBtnDrink").className = "menuBarPart selectedPart";
		document.getElementById("menuBtnBeer").className = "menuBarPart";
	}

	$scope.changeSelectionBeer = function() {
		document.getElementById("menuBtnAll").className = "menuBarPart";
		document.getElementById("menuBtnColdDrinks").className = "menuBarPart";
		document.getElementById("menuBtnCiggarete").className = "menuBarPart";
		document.getElementById("menuBtnWater").className = "menuBarPart";
		document.getElementById("menuBtnFood").className = "menuBarPart";
		document.getElementById("menuBtnDrink").className = "menuBarPart";
		document.getElementById("menuBtnBeer").className = "menuBarPart selectedPart";
	}

	$ionicModal.fromTemplateUrl('js/modals/holdModal.html', {
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

	$ionicModal.fromTemplateUrl('js/modals/logoutModal.html', {
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

	$ionicModal.fromTemplateUrl('js/modals/paymentModal.html', {
	scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.paymentModal = modal;
	});
	$scope.openPaymentModal = function() {
		$scope.paymentModal.show();
	};
	$scope.closePaymentModal = function() {
		$scope.paymentModal.hide();
	};
	// Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.paymentModal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
	// Execute action
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	// Execute action
	});

	$ionicModal.fromTemplateUrl('js/modals/payTmModal.html', {
	scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.payTmModal = modal;
	});
	$scope.openPayTmModal = function() {
		$scope.payTmModal.show();
	};
	$scope.closePayTmModal = function() {
		$scope.payTmModal.hide();
	};
	// Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.payTmModal.remove();
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