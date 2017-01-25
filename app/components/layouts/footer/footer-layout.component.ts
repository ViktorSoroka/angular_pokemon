import controller  from './footer-layout.controller';

const templateUrl:string = require('./footer-layout.tpl.html');

import './footer.less';


/**
 * @ngdoc directive
 * @name pkmLayouts.pkmFooter
 * @scope
 *
 * @description Footer layout component
 */
export default {
  templateUrl,
  controller,
  controllerAs: 'footer'
};
