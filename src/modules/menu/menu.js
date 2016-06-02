angular.module('app.modules')
    .controller('menuCtrl', menuCtrl);


function menuCtrl($scope, $stateParams, $rootScope, $templateCache, $aside, SessionService) {
    //variables
    var vm = this;
    vm.usuario = SessionService.getSession().usuario;
    vm.id_evento = $stateParams.id;

    // definition
    vm.openMenu = openMenu;

    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams, options) {
            vm.id_evento = $stateParams.id;
        })

    // implementation
    function openMenu() {
        $aside({
            title: "Menu"
        });
    }
}
