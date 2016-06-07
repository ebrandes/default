angular.module('app.services')
    .factory('RelatorioService', relatorioService);

function relatorioService($http, SessionService, API) {

    return {
        getRelatorioPesquisa: getRelatorioPesquisa,
        getRelatorioLogados: getRelatorioLogados,
        getRelatorioEntradas: getRelatorioEntradas,
        getQtdUsuariosAcessaram: getQtdUsuariosAcessaram,
        getPesquisaCsv: getPesquisaCsv
    }

    function getPesquisaCsv(idEvento, callback) {
        $http.get(API.url + 'relatorio/csv/' + idEvento).then(function (response) { callback(response) });
    }

    function getRelatorioPesquisa(idEvento, callback) {
        $http.get(API.url + 'relatorio/pesquisa/' + idEvento).then(function (response) { callback(response) });
    }

    function getRelatorioLogados(idEvento, callback) {
        $http.get(API.url + 'relatorio/logados/' + idEvento).then(function (response) { callback(response) });
    }

    function getRelatorioEntradas(idEvento, callback) {
        $http.get(API.url + 'evento/' + idEvento + '/relatorio-acessos').then(function (response) { callback(response) });
    }

    function getQtdUsuariosAcessaram(idEvento, callback) {
        $http.get(API.url + 'evento/' + idEvento + '/qtd-usuarios-acessaram').then(function (response) { callback(response) });
    }
}