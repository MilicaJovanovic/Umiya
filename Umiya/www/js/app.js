var myApp = angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })
  .state('amount', {
    url: '/amount',
    templateUrl: 'templates/amountPage.html',
    controller: 'AmountController'
  })
  .state('homepage', {
    url: '/homepage',
    templateUrl: 'homePage.html',
    controller: 'HomePageController'
  });

  $urlRouterProvider.otherwise('/login');
});