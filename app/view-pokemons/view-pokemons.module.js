import angular          from 'angular';

import component    from './view-pokemons.component';

import './view-pokemons.less';

/**
 * @ngdoc overview
 * @name pokemonMain
 *
 * @description
 * Hold component for generating main layout
 */
export default angular.module('pokemonViewPokemons', [])

  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('main.pokemons', {
        url      : '/pokemons',
        component: 'pokemonViewPokemons'
      })
  })
  .component('pokemonViewPokemons', component)
  .name;
