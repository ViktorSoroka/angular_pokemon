import * as angular from 'angular';

import component    from './view-pokemons.component';
import pokemonsList from './pokemons-list';

/**
 * @ngdoc overview
 * @name pkmViewPokemons.pkmViewPokemons
 *
 * @description
 * Hold component for generating main layout
 */
export default angular.module('pkmViewPokemons', [
  pokemonsList
])

  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('main.pokemons', {
        url      : '/pokemons',
        component: 'pkmViewPokemons'
      })
  })
  .component('pkmViewPokemons', component)
  .name;
