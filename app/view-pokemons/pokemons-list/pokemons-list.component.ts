const templateUrl:string = require('./pokemons-list.tpl.html');

import controller from './pokemons-list.controller';

/**
 * @ngdoc directive
 * @name pkmPokemonsList.pkmPokemonsList
 *
 * @scope
 *
 * @description
 * Component to render pokemons list
 */
export default {
  templateUrl,
  controller: controller,
  bindings: {
    pokemons: '<'
  },
  controllerAs: 'pokemonsList'
};
