import controller  from './header-layout.controller';

const templateUrl:string = require('./header-layout.tpl.html');

import './header.less';

/**
 * @ngdoc directive
 * @name pkmLayouts.pkmHeader
 * @scope
 *
 * @description Header layout component
 */
export default {
  templateUrl,
  controller,
  controllerAs: 'header'
};
