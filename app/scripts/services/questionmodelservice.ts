/// <reference path="../app.ts" />

'use strict';

module DemoApp {
    export class Questionmodelservice {
        questions: any[] = [
            {
                sortOrder: 1,
                name: 'Kysymys?',
                value: null
            },
            {
                sortOrder: 2,
                name: 'Kysymys?',
                value: null
            },
            {
                sortOrder: 3,
                name: 'Kysymys?',
                value: null
            }
        ];
    }
}

angular.module('demoApp')
    .service('QuestionModelService', DemoApp.Questionmodelservice);
