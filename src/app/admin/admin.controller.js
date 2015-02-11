'use strict';

angular.module('hw3')
  .controller('adminCtrl', function () {})

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('admin',
        {
          url: '/admin',
          templateUrl: 'app/admin/admin.html',
          controller: 'adminCtrl',
          resolve: {
            isLogged: ['$state', '$q', 'authServ',
              function ($state, $q, authServ) {
                if (!authServ.authorized()) {
                  $state.go('login');
                  console.log('Unauthorized!');
                  return $q.reject('Unauthorized!');
                } else

                if (!authServ.isAdmin()) {
                  //authServ.logout();
                  console.log('Access denied');
                  $state.go('login', {action: 'logout'});
                  return $q.reject('Access denied');
                }
              }]
          }
        });

    }]);
