import * as angular       from 'angular';

// import './styles';

import layouts            from './layouts';
import router             from './router';
import models             from './models';
import serverInteraction  from './server-interaction';


export default angular.module('pkmComponents', [
  layouts,
  router,
  models,
  serverInteraction
])
  .name;
