"use strict";
var angular = require('angular');
var router_1 = require('../router');
var header_layout_component_1 = require('./header/header-layout.component');
var footer_layout_component_1 = require('./footer/footer-layout.component');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('pkmLayouts', [
    router_1.default
])
    .component('pkmHeader', header_layout_component_1.default)
    .component('pkmFooter', footer_layout_component_1.default)
    .name;
