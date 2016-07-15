/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('portfolio')
    .component('portfolio', {
        templateUrl: 'components/portfolio/portfolio.template.html',
        controller: ['Quote',
            function Portfolio (Quote) {
                var self = this;
                self._symbolIndexLookup = {};
                self.quotes = [];

                self.addSymbol = function addSymbol(symbolItem) {
                    if (symbolItem) {
                        self._symbolIndexLookup[symbolItem.symbol] = self.quotes.length;
                        self.quotes.push({
                            symbol: symbolItem.symbol,
                            name: symbolItem.name,
                            quote: '?.??',
                            units: null                            
                        });

                        Quote.get([symbolItem.symbol])
                            .then(function (results) {
                                // assume a single result for now
                                if (results && results.length) {
                                    var index = self._symbolIndexLookup[symbolItem.symbol];
                                    self.quotes[index].quote = results[0].LastTradePriceOnly;                                    
                                }
                            });
                    }
                }
            }
        ]
    });