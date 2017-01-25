// import * as templateUrl from './view-pokemons.tpl.html';
"use strict";
/**
 * @ngdoc controller
 *
 * @class
 * @description
 * Controller for Main component
 */
/*@ngInject*/
var PokemonsCtrl = (function () {
    function PokemonsCtrl(/*@ngInject*/ $injector) {
        this.Pokemons = $injector.get('PokemonsFct');
        var offset = 0;
        var limit = 20;
        this.loadData(offset, limit);
    }
    PokemonsCtrl.prototype.loadData = function (offset, limit) {
        var _this = this;
        var pokemons = this.Pokemons.get({ offset: offset, limit: limit });
        var baseImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        pokemons.$promise
            .then(function (data) {
            _this.pokemons = data.results.map(function (item, idx) {
                var id = idx + offset + 1;
                return {
                    id: id,
                    name: item.name,
                    imgUrl: "" + baseImageUrl + id + ".png",
                };
            });
        });
    };
    return PokemonsCtrl;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    templateUrl: './view-pokemons.tpl.html',
    controller: PokemonsCtrl
};
