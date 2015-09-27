/// <reference path="../app.ts" />

'use strict';

module DemoApp {
  export interface IAboutScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class AboutCtrl {
    // @ngInject
    constructor (private $scope: IAboutScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('demoApp')
  .controller('AboutCtrl', DemoApp.AboutCtrl);
