"use strict";
var angular = require('angular');
var pokemons_list_component_1 = require('./pokemons-list.component');
require('./pokemons-list.less');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmPokemonsList', [])
    .component('pkmPokemonsList', pokemons_list_component_1.default)
    .name;
