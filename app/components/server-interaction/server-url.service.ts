/**
 * @ngdoc overview
 * @name pkmServerRequestUrl
 * @description
 *
 * Module for interceptor to change request url
 */
import * as angular from 'angular';

export default angular.module('pkmServerRequestUrl', [])  //eslint-disable-line angular/file-name
  .config(/*@ngInject*/$httpProvider => {
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
    request(config) {
      config.url = config.url.replace('{api}', baseApiUrl);

      return config;
    }
  };
}
