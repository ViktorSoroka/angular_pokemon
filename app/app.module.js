"use strict";
var angular = require('angular');
var components_1 = require('./components');
var view_main_1 = require('./view-main');
var view_pokemons_1 = require('./view-pokemons');
angular.module('pkmApp', [
    components_1.default,
    view_main_1.default,
    view_pokemons_1.default
]);
