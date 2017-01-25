// import * as templateUrl from './pokemons-list.tpl.html';
"use strict";
var pokemons_list_controller_1 = require('./pokemons-list.controller');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    templateUrl: './pokemons-list.tpl.html',
    controller: pokemons_list_controller_1.default,
    bindings: {
        pokemons: '<'
    },
    controllerAs: 'pokemonsList'
};
