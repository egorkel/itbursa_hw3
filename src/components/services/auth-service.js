'use strict';

angular.module('hw3')
  .factory('authServ', ['$window', function ($window) {
    return {
      authorized: function () {
        return !!$window.localStorage.username;
      },

      login: function (userName) {
        $window.localStorage.username = userName;
      },

      logout: function () {
        $window.localStorage.username = '';
      },

      isAdmin: function () {
        return $window.localStorage.username === 'admin';
      }
    };
  }]);