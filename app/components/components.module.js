"use strict";
var angular = require('angular');
// import './styles';
var layouts_1 = require('./layouts');
var router_1 = require('./router');
var models_1 = require('./models');
var server_interaction_1 = require('./server-interaction');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmComponents', [
    layouts_1.default,
    router_1.default,
    models_1.default,
    server_interaction_1.default
])
    .name;
