angular.module('app.services')
    .factory('ParticipanteService', participanteService);

function participanteService($http, API) {

    return {
        getParticipantes: getParticipantes,
        convidarUsuarios: convidarUsuarios,
        getAllUsuariosAppNaoConfirmados: getAllUsuariosAppNaoConfirmados,
        excluir: excluir
    }

    function getAllUsuariosAppNaoConfirmados(idEvento, callback) {
        $http.get(API.url + "evento/" + idEvento + '/usuarios').then(function (response) {
            callback(response.data);
        })
    }

    function getParticipantes(idEvento, callback) {
        $http.get(API.url + "evento/" + idEvento + '/participantes/').then(function (response) {
            console.log(response);
            callback(response.data)
        });
    }

    function convidarUsuarios(idEvento, emails, callback) {
        $http.post(API.url + "evento/" + idEvento + '/convidar', { emails: emails }).then(function (response) {
            callback(response.data)
        });
    }

    function excluir(participanteParaExcluir, idEvento, successCallback, failureCallback) {
        var idUsuario = participanteParaExcluir.id;
        var DELETE_URL = API.url.concat('evento/' + idEvento + '/participantes/excluir/' + idUsuario);
        $http.delete(DELETE_URL)
            .then(function (data) {
                data.success = true;
                if (successCallback)
                    successCallback(data);
            },
            function (error) {
                console.log(error);
                if (failureCallback)
                    failureCallback(error);
            });
    }
}
