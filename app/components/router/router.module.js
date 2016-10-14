import angular from 'angular';

import 'angular-ui-router';

import router       from './router.service';


/**
 * @ngdoc overview
 * @name pokemonRouter
 *
 * @description
 * Module for router customization and helpers
 */
export default angular.module('pokemonRouter', [ //eslint-disable-line angular/file-name
  'ui.router'
])
  .config(/*@ngInject*/$locationProvider => $locationProvider.html5Mode(true))
  .provider('routerFct', router)
  .name;
