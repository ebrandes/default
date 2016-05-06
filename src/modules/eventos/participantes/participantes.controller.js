angular.module('app.modules')
    .controller('participantesCtrl', participantesCtrl);

function participantesCtrl(HelperService, $rootScope) {
    var vm = this;

    $rootScope.isInEvent = true;
    vm.participantes = buscarParticipantes();

    function buscarParticipantes() {
        var i;
        var participantes = [];
        for (i = 0; i < 6; i++) {
            participantes.push({
                imagem: 'http://placehold.it/80x80',
                nome: 'Lorem ipsum dolor sit amet',
                email: 'Lorem@ipsum.dolor.sit.amet'
            });
        }
        return participantes;
    }
}
