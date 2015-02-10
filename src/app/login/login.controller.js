'use strict';

angular.module('hw3', ['ui.router'])
  .controller('loginCtrl', ['$scope', '$window', '$state',
    function ($scope, $window, $state) {
      $window.localStorage.name = '';

      $scope.login = function (userName) {
        $window.localStorage.name = userName;
        $state.go('page1');
      };
    }])

  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login',
        {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'loginCtrl'
        });

      $urlRouterProvider.otherwise('/login');
    }]);
