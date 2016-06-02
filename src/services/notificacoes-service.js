angular.module('app.services')
    .factory('NotificacoesService', notificacoesService);

function notificacoesService($rootScope, $http, API) {

    return {
        getAll: getAll,
        // salvar: salvar,
        excluir: excluir,
    }

    // $rootScope.notificationIcons = {
    //     'avaliacao': 'fa fa-star',
    //     'noticia': 'fa fa-sticky-note',
    //     'alarme': 'fa fa-clock-o',
    //     'padrao': 'fa fa-info-circle',
    //     'foto': 'fa fa-camera'
    // };

    function getAll(id, callback) {
        $http.get(API.url + 'notificacoes/', { params: { idEvento: id } }).then(function (response) { callback(response) });
    }

    function excluir(notificacaoParaExcluir, successCallback, failureCallback) {
        var DELETE_NOTIFICATION_URL = API.url + "notificacao/" + notificacaoParaExcluir.id;
        $http.delete(DELETE_NOTIFICATION_URL, notificacaoParaExcluir)
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

    var notificacoes = [];

}
