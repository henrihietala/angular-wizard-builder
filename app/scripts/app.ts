/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

'use strict';

angular.module('demoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/wizard.html',
        controller: 'WizardCtrl'
      })
      .when('/editor', {
        templateUrl: 'views/wizard-editor.html',
        controller: 'WizardeditorCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
