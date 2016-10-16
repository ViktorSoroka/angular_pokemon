import angular         from 'angular';

import modelPokemons  from './pokemons';

/**
 * @ngdocs overview
 * @name pokemonModels
 *
 * @description
 * Module for holding models
 */
export default angular.module('pokemonModels', [
  modelPokemons
])

  .name;
