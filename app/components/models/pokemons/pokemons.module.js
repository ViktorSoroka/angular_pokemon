import angular    from 'angular';
import ngResource from 'angular-resource';

import Pokemons from './pokemons.service';

/**
 * @ngdocs overview
 * @name pkmPokemons
 *
 * @description
 * Module for requests models
 */
export default angular.module('pkmPokemons', [ //eslint-disable-line angular/file-name
  ngResource
])
  .factory('PokemonsFct', Pokemons)
  .name;
