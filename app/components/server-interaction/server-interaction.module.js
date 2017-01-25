"use strict";
var angular = require('angular');
var ngResource = require('angular-resource');
var router_1 = require('../router');
var server_url_service_1 = require('./server-url.service');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmServerInteraction', [
    ngResource,
    router_1.default,
    server_url_service_1.default
])
    .config(/*@ngInject*/ function (/*@ngInject*/ $resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = true;
})
    .name;
