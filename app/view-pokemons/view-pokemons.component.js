import templateUrl from './view-pokemons.tpl.html';

/**
 * @ngdoc controller
 *
 * @class
 * @description
 * Controller for Main component
 */
class PokemonsCtrl {
  /*@ngInject*/
  constructor($injector) {
    this.Pokemons = $injector.get('PokemonsFct');
    this.$state   = $injector.get('$state');

    const offset = 0;
    const limit  = 20;

    this.loadData(offset, limit);
  }

  loadData(offset, limit) {
    const pokemons = this.Pokemons.get({ offset, limit });

    const baseImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    pokemons.$promise
      .then(data => {
        this.pokemons = data.results.map((item, idx) => {
            const id = idx + offset + 1;

            return {
              id,
              name  : item.name,
              imgUrl: `${baseImageUrl}${id}.png`,
            }
          }
        )
      });
  }
}


/**
 * @ngdoc directive
 * @name pkmViewPokemons.pkmViewPokemons
 *
 * @scope
 *
 * @description
 * Component to render main layout
 */
export default {
  templateUrl,
  controller: PokemonsCtrl
};
