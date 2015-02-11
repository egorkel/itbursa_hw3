'use strict';

angular.module('hw3')
  .controller('navbarCtrl', ['$rootScope', '$scope', '$window',
    function ($rootScope, $scope, $window) {
      $scope.hide = true;

      //Hide navbar when go to login page
      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $scope.hide = (toState.url === '/');
      });
    }]);
