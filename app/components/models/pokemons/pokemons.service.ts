import * as angular from 'angular';

/**
 * @ngdoc service
 * @name pkmPokemons.PokemonsFct
 *
 * @description Model for requests. Returns Request model
 */
/*@ngInject*/
export default function($injector) { //eslint-disable-line max-statements
  const $resource = $injector.get('$resource');

  /**
   * @ngdoc service
   * @name pkmPokemons.Pokemon
   * @class
   * @extends $resource
   *
   * @description Model for requests. Returned by RequestsFct
   */
  const Pokemon = $resource('https://pokeapi.co/api/v2/pokemon/', {
    isArray: true
  }, {

    /**
     * @ngdoc method
     * @methodOf pkmPokemons.Pokemon
     * @name pkmPokemons.Pokemon#get
     * @restMethod GET
     *
     * @param {string} id
     *
     * @returns {$resource}
     *
     * @description returns request DTO.
     */
    get: {
      method: 'GET'
    }

  });

  return Pokemon;
};
