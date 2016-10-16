/**
 * @ngdoc overview
 * @name pokemonServerRequestUrl
 * @description
 *
 * Module for interceptor to change request url
 */
import angular from 'angular';

export default angular.module('pokemonServerRequestUrl', [])  //eslint-disable-line angular/file-name
  .config(/*@ngInject*/$httpProvider => {
    $httpProvider.interceptors.push('urlInterceptorFct');
  })
  .constant('baseApiUrl', '/api')
  .factory('urlInterceptorFct', urlInterceptorFactory)
  .name;

/**
 * @ngdocs service
 * @name pokemonServerRequestUrl.urlInterceptorFct
 */
/*@ngInject*/
function urlInterceptorFactory(baseApiUrl) {
  return {
    request(config) {
      config.url = config.url.replace('{api}', baseApiUrl);

      return config;
    }
  };
}
