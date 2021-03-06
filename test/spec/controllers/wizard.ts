/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/wizard.ts" />

'use strict';

describe('Controller: WizardCtrl', () => {

  // load the controller's module
  beforeEach(module('DemoApp'));

  var WizardCtrl: DemoApp.WizardCtrl,
    scope: DemoApp.IWizardScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    WizardCtrl = $controller('WizardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
