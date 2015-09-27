/// <reference path="../app.ts" />

'use strict';

module DemoApp {

    export class Question implements ng.IDirective {
        templateUrl = './views/directive-templates/question.html';
        restrict = 'E';
        scope = {
            question: '=',
            activeQuestionIndex: '=',
            moveToNextQuestion: '=',
            moveToPreviousQuestion: '='
        };
    }

    export function questionFactory() {
        return new DemoApp.Question();
    }

}

angular.module('demoApp')
    .directive('question', DemoApp.questionFactory);
