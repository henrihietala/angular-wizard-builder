/// <reference path="../app.ts" />

'use strict';

module DemoApp {
    export interface IWizardScope extends ng.IScope {

    }

    export class WizardCtrl {
        vm;

        // @ngInject
        constructor(private $scope, private QuestionModelService) {
            this.vm = $scope;
            $scope.questions = QuestionModelService.questions;
            this.vm.activeQuestionIndex = 0;
        }

        
    }
}

angular.module('demoApp')
    .controller('WizardCtrl', DemoApp.WizardCtrl);
