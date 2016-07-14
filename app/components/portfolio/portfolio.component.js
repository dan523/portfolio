/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('portfolio')
    .component('portfolio', {
        templateUrl: 'components/portfolio/portfolio.template.html',
        controller: ['Quote',
            function Portfolio (Quote) {
                var self = this;
                self.quotes = [];

                self.addSymbol = function addSymbol(symbol) {
                    if (symbol) {
                        Quote.get([symbol])
                            .then(function (results) {
                                self.quotes = self.quotes.concat(results);
                            });
                    }
                }
            }
        ]
    });