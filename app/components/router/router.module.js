"use strict";
var angular = require('angular');
require('angular-ui-router');
var router_service_1 = require('./router.service');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmRouter', [
    'ui.router'
])
    .config(/*@ngInject*/ function ($locationProvider) {
    $locationProvider.html5Mode(true);
})
    .provider('routerFct', router_service_1.default)
    .name;
