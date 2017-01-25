"use strict";
/**
 * @ngdoc service
 * @name pkmPokemons.PokemonsFct
 *
 * @description Model for requests. Returns Request model
 */
/*@ngInject*/
function default_1($injector) {
    var $resource = $injector.get('$resource');
    /**
     * @ngdoc service
     * @name pkmPokemons.Pokemon
     * @class
     * @extends $resource
     *
     * @description Model for requests. Returned by RequestsFct
     */
    var Pokemon = $resource('https://pokeapi.co/api/v2/pokemon/', {
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
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
