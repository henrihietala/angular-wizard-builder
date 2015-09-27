/// <reference path="../app.ts" />

'use strict';

module sprDemoApp {

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
        return new sprDemoApp.Question();
    }

}

angular.module('sprDemoApp')
    .directive('question', sprDemoApp.questionFactory);
