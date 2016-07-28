/// <reference path="../../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolListRow', ['ngMaterial'])
    .component('symbolListRow', {
        bindings: {
            quote: '<'
        },
        templateUrl: 'src/components/symbol-list-row/symbol-list-row.template.html'
    });