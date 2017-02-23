angular.module('starter').directive('productBlock', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      product: '=' 
    }, 
    templateUrl: '../directives/templates/productBlock.html'
  }; 
});