angular.module('app.modules')
    .controller('usuariosCtrl', usuariosCtrl);

function usuariosCtrl($rootScope, HelperService) {
    this.init = init;

    function init() {
        $rootScope.isInEvent = false;
    }
}
