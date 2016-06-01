angular.module('app.services')
    .factory('EventosService', eventosService);

function eventosService($http, SessionService, API) {
    return {
        salvar: salvar,
        getAll: getAll,
        excluir: excluir,
        getInformacoes: getInformacoes,
        saveInformacoes: saveInformacoes,
        getParametros: getParametros,
        saveParametros: saveParametros,
        excluirInformacao: excluirInformacao
    }

    function excluirInformacao(id, callback) {
        $http.delete(API.url + "evento/informacao/" + id).then(function (res) {
            callback(res.data);
        })
    }

    function salvar(evento, callback) {
        if (evento.id) {
            $http.put(API.url + 'evento/' + evento.id, evento).then(function (response) { callback(response.data) });
        } else {
            $http.post(API.url + 'evento', evento).then(function (response) { callback(response.data) });
        }
    };

    function getAll(callback) {
        $http.get(API.url + 'evento').then(function (response) { callback(response) });
    }

    function excluir(id, callback) {
        $http.delete(API.url + 'evento/' + id).then(function (response) { callback(response) });
    }

    function getInformacoes(id, callback) {
        $http.get(API.url + 'evento/' + id + '/informacoes').then(function (response) { callback(response) });
    }

    function saveInformacoes(informacoes, excluidos, callback) {
        $http.post(API.url + 'evento/informacoes', { informacoes: informacoes, excluidos: excluidos }).then(function (response) { callback(response) });
    }

    function getParametros(id, callback) {
        $http.get(API.url + 'evento/' + id + '/parametros').then(function (response) { callback(response) })
    }

    function saveParametros(id, parametros, callback) {
        $http.post(API.url + 'evento/' + id + '/parametros', parametros).then(function (response) { callback(response) })
    }
}
