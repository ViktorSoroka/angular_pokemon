"use strict";
/**
 * @ngdoc overview
 * @name pkmServerRequestUrl
 * @description
 *
 * Module for interceptor to change request url
 */
var angular = require('angular');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmServerRequestUrl', []) //eslint-disable-line angular/file-name
    .config(/*@ngInject*/ function (/*@ngInject*/ $httpProvider) {
    $httpProvider.interceptors.push('urlInterceptorFct');
})
    .constant('baseApiUrl', '/api')
    .factory('urlInterceptorFct', urlInterceptorFactory)
    .name;
/**
 * @ngdocs service
 * @name pkmServerRequestUrl.urlInterceptorFct
 */
/*@ngInject*/
function urlInterceptorFactory(baseApiUrl) {
    return {
        request: function (config) {
            config.url = config.url.replace('{api}', baseApiUrl);
            return config;
        }
    };
}
