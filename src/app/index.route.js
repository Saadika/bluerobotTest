(function() {
  'use strict';

  angular
    .module('bluerobot')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('testtwo', {
        url: '/testtwo',
        templateUrl: 'app/testtwo/testtwo.html',
        controller: 'TesttwoController',
        controllerAs: 'testtwo'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
