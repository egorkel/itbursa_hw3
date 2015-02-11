'use strict';

angular.module('hw3')
  .controller('page2Ctrl', function ($scope) {

  })

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('page2',
        {
          url: '/page2',
          templateUrl: 'app/page2/page2.html',
          controller: 'page2Ctrl',
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

    }]);
