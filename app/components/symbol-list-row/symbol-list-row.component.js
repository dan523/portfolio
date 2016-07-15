/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolListRow')
    .component('symbolListRow', {
        bindings: {
            quote: '<'
        },
        templateUrl: 'components/symbol-list-row/symbol-list-row.template.html'
    });