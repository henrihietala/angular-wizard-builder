/// <reference path="../app.ts" />

'use strict';

module DemoApp {
    export interface IWizardeditorScope extends ng.IScope {
    }

    export class WizardeditorCtrl {
        vm;
        // @ngInject
        constructor(private $scope, private QuestionModelService) {
            
            $scope.questions = QuestionModelService.questions;
            this.vm = $scope;
            $scope.addQuestion = this.addQuestion;
            $scope.removeQuestion = this.removeQuestion;
        }

        addQuestion = () => {
            this.QuestionModelService.questions.push({
                sortOrder: Math.max.apply(Math, this.QuestionModelService.questions.map(q => (q.sortOrder + 1))),
                name: '',
                value: null
            });
        }

        removeQuestion = (index) => {
            console.log('removing ' + index);
            this.QuestionModelService.questions.slice(1, index);
        }
    }
}

angular.module('demoApp')
    .controller('WizardeditorCtrl', DemoApp.WizardeditorCtrl);
