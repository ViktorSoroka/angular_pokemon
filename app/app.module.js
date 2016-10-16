import angular          from 'angular';
import componentsModule from './components';
import viewMain         from './view-main';
import viewPokemons     from './view-pokemons';

angular.module('pokemonApp', [
  componentsModule,
  viewMain,
  viewPokemons
]);
