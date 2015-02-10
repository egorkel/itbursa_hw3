'use strict';

angular.module('hw3')
  .controller('page1Ctrl', function () {

  })

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('page1',
        {
          url: '/page1',
          templateUrl: 'app/page1/page1.html',
          controller: 'page1Ctrl'
        });
    }]);
