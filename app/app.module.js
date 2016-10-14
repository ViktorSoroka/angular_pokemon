import angular          from 'angular';
import componentsModule from './components';
import viewMain         from './view-main';

angular.module('pokemonApp', [
  componentsModule,
  viewMain
]);
