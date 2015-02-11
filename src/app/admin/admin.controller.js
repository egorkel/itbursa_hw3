'use strict';

angular.module('hw3')
  .controller('adminCtrl', function () {

  })

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('admin',
        {
          url: '/admin',
          templateUrl: 'app/admin/admin.html',
          controller: 'adminCtrl',
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
