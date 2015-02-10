'use strict';

angular.module('hw3', ['ui.router'])
  .controller('loginCtrl', ['$scope', '$window',
    function ($scope, $window) {
      $window.localStorage.name = 'test';
      console.log($window.localStorage.name);
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
