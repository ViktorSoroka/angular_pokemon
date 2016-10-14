import angular          from 'angular';

import mainComponent    from './view-main.component';

import './view-main.less';

/**
 * @ngdoc overview
 * @name pokemonMain
 *
 * @description
 * Hold component for generating main layout
 */
export default angular.module('pokemonViewMain', [])

  .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url       : '/app',
        // 'abstract': true,
        component : 'pokemonMainComponent'
      })
  })
  .run(/*@ngInject*/routerFct => {
    routerFct.init();
  })
  .component('pokemonMainComponent', mainComponent)
  .name;
