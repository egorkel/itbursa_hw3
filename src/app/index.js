'use strict';

angular.module('hw3', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'loginCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
