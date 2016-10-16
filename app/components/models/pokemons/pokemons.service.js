import angular from 'angular';

/**
 * @ngdoc service
 * @name pokemonRequests.RequestsFct
 *
 * @description Model for requests. Returns Request model
 */
export default /*@ngInject*/$injector => { //eslint-disable-line max-statements
  const $resource = $injector.get('$resource');

  /**
   * @ngdoc service
   * @name pokemonRequests.Request
   * @class
   * @extends $resource
   *
   * @description Model for requests. Returned by RequestsFct
   */
  const Pokemons = $resource('https://pokeapi.co/api/v2/pokemon/', {
    isArray: true
  }, {

    /**
     * @ngdoc method
     * @methodOf pokemonRequests.Request
     * @name pokemonRequests.Request#get
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

  return Pokemons;
};
