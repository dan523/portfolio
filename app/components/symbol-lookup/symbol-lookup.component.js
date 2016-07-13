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
                    return Symbol.get({
                                query: searchString,
                                region: 'CA',   // TODO: Don't hardcode
                                lang: 'en-CA'   // TODO: Don't hardcode
                            }
                        )
                        .$promise
                        .then(function (results) {
                            return results.ResultSet.Result;
                        });
                };
            }
        ]
    });