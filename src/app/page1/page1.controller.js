'use strict';

angular.module('hw3')
  .controller('page1Ctrl', ['$scope', '$window', '$state',
    function ($scope, $window, $state) {

  }])

  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('page1',
        {
          url: '/page1',
          templateUrl: 'app/page1/page1.html',
          controller: 'page1Ctrl',
          resolve: {
            isLogged: ['$window', '$state', '$q',
              function ($window, $state, $q) {
                if (!$window.localStorage.username) {
                  $state.go('/');
                  //console.log('Unauthorized!');
                  return $q.reject('Unauthorized!');
                }
              }]
          }
        });

      $urlRouterProvider.otherwise(function ($injector, $location) {
        $location.url('/page1');
      });
    }]);
