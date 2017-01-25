import * as angular from 'angular';
import router  from '../router';

import headerComponent from './header/header-layout.component';
import footerComponent from './footer/footer-layout.component';

/**
 * @ngdocs overview
 * @name pokemonLayouts
 *
 * @description
 * Module for layout components like header or footer
 */
export default angular.module('pkmLayouts', [ // eslint-disable-line angular/file-name
  router
])

  .component('pkmHeader', headerComponent)
  .component('pkmFooter', footerComponent)
  .name;
