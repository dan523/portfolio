/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('core.symbol')
    .factory('Symbol', function ($http) {
            // TODO: Don't hardcode language and region
            var searchUrl = 'https://crossorigin.me/https://s.yimg.com/aq/autoc?lang=en-CA&region=CA&query={0}';

            return {
                query: function (searchString) {
                    var s
                    return $http.get(searchUrl.replace('{0}', searchString))
                        .then(function (result) {
                            return result.data.ResultSet.Result;
                        });
                },

                get: function (symbol) {

                }
            };
        }
    );