'use strict';

angular.module('hw3', ['ui.router'])
  .controller('loginCtrl', ['$rootScope', '$scope', '$window', '$state',
    function ($rootScope, $scope, $window, $state) {

      $scope.login = function (userName) {
        $window.localStorage.username = userName;
        $state.go('page1');
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
            isLogged: ['$window', '$state', '$stateParams', '$q',
              function ($window, $state, $stateParams, $q) {
                if($stateParams.action === 'logout') {
                  $window.localStorage.username = '';
                } else {
                  if ($window.localStorage.username) {
                    $state.go('page1');
                    //console.log('Already logged in');
                    return $q.reject('Already logged in');
                  }
                }
              }]
          }
        });

    }]);
