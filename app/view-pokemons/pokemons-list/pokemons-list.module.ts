import * as angular from 'angular';

import component from './pokemons-list.component';

import './pokemons-list.less';

/**
 * @ngdoc overview
 * @name pkmPokemonsList
 *
 * @description
 * Hold component for generating main layout
 */
export default angular.module('pkmPokemonsList', [])
  .component('pkmPokemonsList', component)
  .name;
