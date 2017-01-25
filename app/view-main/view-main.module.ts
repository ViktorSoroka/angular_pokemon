import * as angular from 'angular';

import component from './view-main.component';

import './view-main.less';


/**
 * @ngdoc overview
 * @name pkmMain
 *
 * @description
 * Hold component for generating main layout
 */
export default angular.module('pkmViewMain', [])

  .config(/*@ngInject*/function ($stateProvider, $urlRouterProvider, routerFctProvider) {
    routerFctProvider.setDefaultState('main.pokemons');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url       : '/app',
        'abstract': true,
        component : 'pkmMainComponent'
      });
  })
  .run(/*@ngInject*/function (routerFct) {
    routerFct.init();
  })
  .component('pkmMainComponent', component)
  .name;
