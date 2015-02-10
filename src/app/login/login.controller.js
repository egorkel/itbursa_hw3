'use strict';

angular.module('hw3', ['ui.router'])
  .controller('loginCtrl', ['$scope', function ($scope) {
    $scope.localStorage = {};
    $scope.localStorage.username = '';
  }])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'loginCtrl'
        });

      $urlRouterProvider.otherwise('/login');
    }])
;
