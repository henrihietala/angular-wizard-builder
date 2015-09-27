/// <reference path="../app.ts" />

'use strict';

module sprDemoApp {

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
        return new sprDemoApp.Form();
    }

}

angular.module('sprDemoApp')
    .directive('form', sprDemoApp.formFactory);
