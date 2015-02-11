'use strict';

angular.module('hw3')
  .controller('page1Ctrl', function () {})

  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('page1',
        {
          url: '/page1',
          templateUrl: 'app/page1/page1.html',
          controller: 'page1Ctrl',
          resolve: {
            isLogged: ['$state', '$q', 'authServ',
              function ($state, $q, authServ) {
                if (!authServ.authorized()) {
                  $state.go('login');
                  console.log('Unauthorized!');
                  return $q.reject('Unauthorized!');
                }
              }]
          }
        });

      $urlRouterProvider.otherwise(function ($injector, $location) {
        $location.url('/');
      });
    }]);
