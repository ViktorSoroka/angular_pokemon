import angular    from 'angular';
import ngResource from 'angular-resource';

import router    from '../router';

import acServerUrl    from './server-url.service.js';

/**
 * @ngdoc overview
 * @name pokemonServerInteraction
 * @description
 *
 * Holds services, configuration and interceptors for server interaction services
 */
export default angular.module('pokemonServerInteraction', [ //eslint-disable-line angular/file-name
  ngResource,
  router,
  acServerUrl
])
  .config(/*@ngInject*/$resourceProvider => {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = true;
  })
  .name;
