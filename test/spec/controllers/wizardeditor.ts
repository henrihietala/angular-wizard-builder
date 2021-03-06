/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/wizardeditor.ts" />

'use strict';

describe('Controller: WizardeditorCtrl', () => {

  // load the controller's module
  beforeEach(module('DemoApp'));

  var WizardeditorCtrl: DemoApp.WizardeditorCtrl,
    scope: DemoApp.IWizardeditorScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    WizardeditorCtrl = $controller('WizardeditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
