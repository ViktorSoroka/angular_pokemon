const templateUrl:string = require('./view-pokemons.tpl.html');


/**
 * @ngdoc controller
 *
 * @class
 * @description
 * Controller for Main component
 */
/*@ngInject*/
class PokemonsCtrl {
  private Pokemons;
  public pokemons;
  constructor(/*@ngInject*/$injector) {
    this.Pokemons = $injector.get('PokemonsFct');
    console.log($injector.get('$scope'));

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
/*@ngInject*/
export default {
  templateUrl,
  controller: PokemonsCtrl
};
