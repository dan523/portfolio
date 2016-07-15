/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolList')
    .component('symbolList', {
        bindings: {
            quotes: '<'
        },
        templateUrl: 'components/symbol-list/symbol-list.template.html'
    });