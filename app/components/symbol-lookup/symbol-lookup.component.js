/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolLookup')
    .component('symbolLookup', {
        bindings: {
            onAdd: '&'
        },
        templateUrl: 'components/symbol-lookup/symbol-lookup.template.html',
        controller: ['Symbol', 'Quote',
            function SymbolLookup (Symbol, Quote) {                
                var self = this;

                self.getMatches = function updateMatches(searchString) {          
                    return Symbol.get(searchString);       
                };

                self.getSelectedSymbol = function getSelectedSymbol() {
                    return self.selectedItem && self.selectedItem.symbol;
                }
            }
        ]
    });