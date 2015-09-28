/// <reference path="../app.ts" />

'use strict';

module DemoApp {
    export interface IWizardeditorScope extends ng.IScope {
    }

    export class WizardeditorCtrl {
        vm;
        // @ngInject
        constructor(private $scope, private QuestionModelService) {
            $scope.vm = this;
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
            this.QuestionModelService.questions.splice(index, 1);
        }
    }
}

angular.module('demoApp')
    .controller('WizardeditorCtrl', DemoApp.WizardeditorCtrl);
