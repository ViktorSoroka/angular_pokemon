import angular from 'angular';
import ngResource from 'angular-resource';

import Requests from './pokemons.service';

/**
 * @ngdocs overview
 * @name pokemonPokemons
 *
 * @description
 * Module for requests models
 */
export default angular.module('pokemonPokemons', [ //eslint-disable-line angular/file-name
    ngResource
  ])
  .factory('PokemonsFct', Pokemons)
  .name;
