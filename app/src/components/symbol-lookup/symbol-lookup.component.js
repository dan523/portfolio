/// <reference path="../../../../typings/index.d.ts" />
'use strict';

angular
    .module('symbolLookup', ['ngMaterial', 'core.symbol'])
    .component('symbolLookup', {
        bindings: {
            onAdd: '&'
        },
        templateUrl: 'src/components/symbol-lookup/symbol-lookup.template.html',
        controller: ['Symbol', 'Quote',
            function SymbolLookup (Symbol, Quote) {                
                var self = this;

                self.getMatches = function updateMatches(searchString) {          
                    return Symbol.get(searchString);       
                };

                self.getSelectedSymbol = function getSelectedSymbol() {
                    return self.selectedItem;
                }
            }
        ]
    });