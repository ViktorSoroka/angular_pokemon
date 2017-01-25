"use strict";
var angular = require('angular');
var view_main_component_1 = require('./view-main.component');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmViewMain', [])
    .config(/*@ngInject*/ function ($stateProvider, $urlRouterProvider, routerFctProvider) {
    routerFctProvider.setDefaultState('main.pokemons');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
        url: '/app',
        'abstract': true,
        component: 'pkmMainComponent'
    });
})
    .run(/*@ngInject*/ function (routerFct) {
    routerFct.init();
})
    .component('pkmMainComponent', view_main_component_1.default)
    .name;
