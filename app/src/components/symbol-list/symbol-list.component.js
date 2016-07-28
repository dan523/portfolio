/// <reference path="../../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolList', ['ngMaterial', 'symbolListRow'])
    .component('symbolList', {
        bindings: {
            quotes: '<'
        },
        templateUrl: 'src/components/symbol-list/symbol-list.template.html'
    });