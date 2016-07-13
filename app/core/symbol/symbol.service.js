/// <reference path="../../../typings/index.d.ts" />
'use strict';

angular
    .module('core.symbol')
    .factory('Symbol', ['$resource', 
        function Symbol($resource) {
            return $resource('https://crossorigin.me/https://s.yimg.com/aq/autoc', {}, {
                query: {
                    method: 'GET'
                }
            })
        }]
    );