/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('portfolio')
    .component('symbolLookup', {
        templateUrl: 'components/symbol-lookup/symbol-lookup.template.html',
        controller: function SymbolLookup () {
            var self = this;
            self.test = [
                {display: 'AA'},
                {display: 'BB'},
                {display: 'CC'},
                {display: 'DD'},
                {display: 'AB'},
                {display: 'AC'},
                {display: 'AD'}                
            ]

            self.getMatches = function getMatches(searchString) {
                var upperCaseSearchStr = searchString.toUpperCase();
                return self.test.filter(function(item) {
                    return item.display.toUpperCase().indexOf(upperCaseSearchStr) >= 0;
                });
            };
        }
    });