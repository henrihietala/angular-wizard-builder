/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/form.ts" />

'use strict';

describe('Directive: form', () => {

  // load the directive's module
  beforeEach(module('sprDemoApp'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<form></form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the form directive');
  }));
});
