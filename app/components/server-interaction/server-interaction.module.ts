import * as angular from 'angular';
import * as ngResource from 'angular-resource';

import router from '../router';

import acServerUrl from './server-url.service';

/**
 * @ngdoc overview
 * @name pkmServerInteraction
 *
 * @description
 * Holds services, configuration and interceptors for server interaction services
 */
export default angular.module('pkmServerInteraction', [ //eslint-disable-line angular/file-name
  ngResource,
  router,
  acServerUrl
])
  .config(/*@ngInject*/$resourceProvider => {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = true;
  })
  .name;
