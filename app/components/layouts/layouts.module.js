import angular from 'angular';
import router  from '../router';

import './layouts.less';

import headerComponent from './header/header-layout.component';
import footerComponent from './footer/footer-layout.component';

/**
 * @ngdocs overview
 * @name pokemonLayouts
 *
 * @description
 * Module for layout components like header or footer
 */
export default angular.module('pokemonLayouts', [ // eslint-disable-line angular/file-name
  router
])

  .component('pokemonHeader', headerComponent)
  .component('pokemonFooter', footerComponent)
  .name;
