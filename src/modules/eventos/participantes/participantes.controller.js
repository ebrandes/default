angular.module('app.modules')
    .controller('participantesCtrl', participantesCtrl);

function participantesCtrl(HelperService, $stateParams, $rootScope, ParticipanteService) {
    // variables
    $rootScope.isInEvent = true;
    var vm = this;
    vm.id_evento = $stateParams.id;
    vm.lista = [];

    // definition
    vm.buscar = buscar;

    // implementation
    buscar();
    function buscar() {
        ParticipanteService.getParticipantes(vm.id_evento, function (response) {
            vm.lista = response.usuarios;
        }, function (err) {
            // console.log(err);
        });
    }
}
