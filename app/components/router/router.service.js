/**
 * @ngdoc service
 * @name pkmRouter.routerFct
 *
 * @description
 */
export default function () {
  let defaultState = 'main';

  this.setDefaultState = newDefaultState => {
    defaultState = newDefaultState;
  };

  this.$get = /*@ngInject*/$injector => {
    const $state = $injector.get('$state');

    return {
      /**
       * @ngdoc method
       * @methodOf pkmRouter.routerFct
       * @name pkmRouter.routerFct#init
       *
       * @description Init state watcher for access purposes
       */
      init() {
        this.letsWork();
      },


      /**
       * @ngdoc method
       * @name pkmRouter.routerFct#letsWork
       * @methodOf pkmRouter.routerFct
       *
       * @description This method jumps to default sate or state to which UI should back after login (using URL parameters)
       */
      letsWork() {
        return $state.go(defaultState);
      }
    };
  };
}
