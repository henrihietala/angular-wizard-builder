/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/questionmodelservice.ts" />

'use strict';

describe('Service: QuestionModelService', () => {

  // load the service's module
  beforeEach(module('sprDemoApp'));

  // instantiate service
  var QuestionModelService;
  beforeEach(inject(_QuestionModelService_ => {
    QuestionModelService = _QuestionModelService_;
  }));

  it('should do something', () => {
    expect(!!QuestionModelService).toBe(true);
  });

});
