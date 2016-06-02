angular.module('app.modules')
    .controller('dashboardCtrl', dashboardCtrl);

function dashboardCtrl($rootScope, $stateParams, $state) {
    // variables
    var vm = this;
    vm.id_evento = $stateParams.id;

    // definition
    vm.init = init;

    // implementation
    function init() {
        $rootScope.isInEvent = true;
    }
}