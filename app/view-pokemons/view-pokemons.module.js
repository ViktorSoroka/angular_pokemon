"use strict";
var angular = require('angular');
var view_pokemons_component_1 = require('./view-pokemons.component');
var pokemons_list_1 = require('./pokemons-list');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmViewPokemons', [
    pokemons_list_1.default
])
    .config(/*@ngInject*/ function (/*@ngInject*/ $stateProvider) {
    $stateProvider
        .state('main.pokemons', {
        url: '/pokemons',
        component: 'pkmViewPokemons'
    });
})
    .component('pkmViewPokemons', view_pokemons_component_1.default)
    .name;
