angular.module('starter').directive('productBlock', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      product: '=' 
    }, 
    templateUrl: 'js/directives/templates/productBlock.html'
  }; 
});