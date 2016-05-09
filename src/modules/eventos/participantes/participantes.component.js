var participantes = {
    templateUrl: 'eventos/participantes/participantes.html',
    controller: ParticipantesCtrl
};

angular
    .module('app.modules')
    .component('participantes', participantes);

ParticipantesCtrl.$inject = ['$rootScope'];

function ParticipantesCtrl($rootScope) {
    var ctrl = this;

    $rootScope.isInEvent = true;
    ctrl.participantes = buscarParticipantes();

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
