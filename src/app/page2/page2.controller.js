'use strict';

angular.module('hw3')
  .controller('page2Ctrl', function () {})

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('page2',
        {
          url: '/page2',
          templateUrl: 'app/page2/page2.html',
          controller: 'page2Ctrl',
          resolve: {
            isLogged: ['$state', '$q', 'authServ',
              function ($state, $q, authServ) {
                if (!authServ.authorized()) {
                  $state.go('/');
                  //console.log('Unauthorized!');
                  return $q.reject('Unauthorized!');
                }
              }]
          }
        });

    }]);
