/// <reference path="../app.ts" />

'use strict';

module sprDemoApp {
    export class Questionmodelservice {
        questions: any[] = [
            {
                sortOrder: 1,
                name: 'Oletko sairastanut syöpää?',
                value: null
            },
            {
                sortOrder: 2,
                name: 'Oletko ollut lääkityksen alaisena viimeisen puolen vuoden aikana?',
                value: null
            },
            {
                sortOrder: 3,
                name: 'Oletko käyttänyt huumeita?',
                value: null
            }
        ];
    }
}

angular.module('sprDemoApp')
    .service('QuestionModelService', sprDemoApp.Questionmodelservice);
