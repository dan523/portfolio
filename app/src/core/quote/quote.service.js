/// <reference path="../../../../typings/index.d.ts" />
'use strict';

angular
    .module('core.quote', [])
    .factory('Quote', function ($http) {
            var yqlGetQuery = 'select * from yahoo.finance.quotes where symbol in ("{0}")'
            var yqlGetFormat = 'json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
            var yqlGetUrl = 'http://query.yahooapis.com/v1/public/yql?q={0}&format=' + yqlGetFormat;

            return {
                /**
                 * Get quotes for the specified symbols within the symbols array.
                 */
                get: function (symbols) {
                    var yqlQueryString = yqlGetQuery.replace('{0}', symbols.join('","'));
                    var getUrl = yqlGetUrl.replace('{0}', encodeURIComponent(yqlQueryString));

                    return $http.jsonp(getUrl)
                        .then(function (result) {
                            var quotes = result.data.query.results.quote;                            
                            return Array.isArray(quotes) ? quotes : [quotes];
                        });
                }
            };
        }
    );