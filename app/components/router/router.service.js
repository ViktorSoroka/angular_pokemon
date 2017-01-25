"use strict";
/**
 * @ngdoc service
 * @name pkmRouter.routerFct
 *
 * @description
 */
/*@ngInject*/
var pocRouter = (function () {
    function pocRouter() {
        var _this = this;
        this.defaultState = 'main';
        this.setDefaultState = function (newDefaultState) {
            _this.defaultState = newDefaultState;
        };
    }
    /*@ngInject*/
    pocRouter.prototype.$get = function ($injector) {
        var $state = $injector.get('$state');
        return {
            /**
             * @ngdoc method
             * @methodOf pkmRouter.routerFct
             * @name pkmRouter.routerFct#init
             *
             * @description Init state watcher for access purposes
             */
            init: function () {
                this.letsWork();
            },
            /**
             * @ngdoc method
             * @name pkmRouter.routerFct#letsWork
             * @methodOf pkmRouter.routerFct
             *
             * @description This method jumps to default sate or state to which UI should back after login (using URL parameters)
             */
            letsWork: function () {
                return $state.go(this.defaultState);
            }
        };
    };
    ;
    return pocRouter;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pocRouter;
