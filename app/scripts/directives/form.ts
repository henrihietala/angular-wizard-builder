/// <reference path="../app.ts" />

'use strict';

module DemoApp {

    export class Form implements ng.IDirective {
        templateUrl = './views/directive-templates/form.html';
        restrict = 'E';
        scope = {
            questions: '=',
            activeQuestionIndex: '=',
            moveToNextQuestion: '=',
            moveToPreviousQuestion: '='
        };

        link(scope) {
            scope.moveToNextQuestion = () => {
                if (scope.activeQuestionIndex !== scope.questions.length - 1)
                    scope.activeQuestionIndex++;
            };

            scope.moveToPreviousQuestion = () => {
                if (scope.activeQuestionIndex !== 0)
                    scope.activeQuestionIndex--;
            };

            scope.moveToIndex = (index) => {
                scope.activeQuestionIndex = index;
            };
        }
    }

    export function formFactory() {

        console.log('test');
        return new DemoApp.Form();
    }

}

angular.module('demoApp')
    .directive('form', DemoApp.formFactory);
