import * as angular  from 'angular';

import modelPokemons from './pokemons';

/**
 * @ngdocs overview
 * @name appModels
 *
 * @description
 * Module for holding models
 */
export default angular.module('appModels', [
  modelPokemons
])

  .name;
