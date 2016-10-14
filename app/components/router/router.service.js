/**
 * @ngdoc service
 * @name pokemonRouter.routerFct
 *
 * @description
 */
export default function () {
  let defaultState = 'main';

  this.$get = /*@ngInject*/$injector => {
    const $state = $injector.get('$state');

    return {
      /**
       * @ngdoc method
       * @methodOf pokemonRouter.routerFct
       * @name pokemonRouter.routerFct#init
       *
       * @description Init state watcher for access purposes
       */
      init() {
        this.letsWork();
      },


      /**
       * @ngdoc method
       * @name pokemonRouter.routerFct#letsWork
       * @methodOf pokemonRouter.routerFct
       *
       * @description This method jumps to default sate or state to which UI should back after login (using URL parameters)
       */
      letsWork() {
        return $state.go(defaultState);
      }
    };
  };
}
