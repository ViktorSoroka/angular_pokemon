import * as angular from 'angular';

import 'angular-ui-router';

import router from './router.service';


/**
 * @ngdoc overview
 * @name pkmRouter
 *
 * @description
 * Module for router customization and helpers
 */
export default angular.module('pkmRouter', [ //eslint-disable-line angular/file-name
  'ui.router'
])
  .config(/*@ngInject*/function ($locationProvider) {
    $locationProvider.html5Mode(true)
  })
  .provider('routerFct', router)
  .name;
