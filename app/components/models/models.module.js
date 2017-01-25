"use strict";
var angular = require('angular');
var pokemons_1 = require('./pokemons');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('appModels', [
    pokemons_1.default
])
    .name;
