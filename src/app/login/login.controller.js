'use strict';

angular.module('hw3', ['ui.router'])
  .controller('loginCtrl', ['$scope', '$state', 'authServ',
    function ($scope, $state, authServ) {

      $scope.login = function (userName) {
        authServ.login(userName);
        if (authServ.authorized()) {
          $state.go('page1');
        }
      };

    }])

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('/',
        {
          url: '/',
          templateUrl: 'app/login/login.html',
          controller: 'loginCtrl',
          params: {
            action: {value: 'no action'}
          },
          resolve: {
            isLogged: ['$state', '$stateParams', '$q', 'authServ',
              function ($state, $stateParams, $q, authServ) {
                if($stateParams.action === 'logout') {
                  authServ.logout();
                } else {
                  if (authServ.authorized()) {
                    $state.go('page1');
                    //console.log('Already logged in');
                    return $q.reject('Already logged in');
                  }
                }
              }]
          }
        });

    }]);
