/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolLookup')
    .component('symbolLookup', {
        templateUrl: 'components/symbol-lookup/symbol-lookup.template.html',
        controller: ['Symbol',
            function SymbolLookup (Symbol) {                
                var self = this;

                self.getMatches = function updateMatches(searchString) {          
                    return Symbol.query(searchString);       
                };
            }
        ]
    });