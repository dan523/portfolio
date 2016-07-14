/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolLookup')
    .component('symbolLookup', {
        templateUrl: 'components/symbol-lookup/symbol-lookup.template.html',
        controller: ['Symbol', 'Quote',
            function SymbolLookup (Symbol, Quote) {                
                var self = this;

                self.getMatches = function updateMatches(searchString) {          
                    return Symbol.get(searchString);       
                };

                self.selectedItemChanged = function selectedItemChanged(item) {
                    if (item) {
                        var test = Quote.get([item.symbol]);
                    }                    
                }
            }
        ]
    });