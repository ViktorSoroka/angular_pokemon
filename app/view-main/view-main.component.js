import templateUrl from './view-main.tpl.html';

/**
 * @ngdoc controller
 *
 * @class
 * @description
 * Controller for Main component
 */
class MainCtrl {
  /*@ngInject*/
  constructor($injector) {
    this.Pokemons = $injector.get('PokemonsFct');
    this.$state   = $injector.get('$state');

    this.loadData();
  }

  loadData() {
    const pokemons = this.Pokemons.get();

    pokemons
      .$promise
      .then(data => {
        // console.log(data);
      });

  }
}


/**
 * @ngdoc directive
 * @name pokemonMain.pokemonMainLayout
 *
 * @scope
 *
 * @description
 * Component to render main layout
 */
export default {
  templateUrl,
  controller: MainCtrl
};
