"use strict";
var angular = require('angular');
var ngResource = require('angular-resource');
var pokemons_service_1 = require('./pokemons.service');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmPokemons', [
    ngResource
])
    .factory('PokemonsFct', pokemons_service_1.default)
    .name;
