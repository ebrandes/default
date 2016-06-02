angular.module('app.services')
    .factory('GaleriaService', galeriaService);

function galeriaService($http, SessionService, API) {

    return {
        getAll: getAll,
        salvar: salvar,
        excluir: excluir,
        salvarFoto: salvarFoto,
        getGaleria: getGaleria,
        getFotos: getFotos,
        excluirFoto: excluirFoto
    }

    function excluirFoto(idFoto, callback) {
        $http.delete(API.url + "foto/" + idFoto).then(function (res) {
            callback(res.data);
        })
    }

    function getGaleria(idEvento, callback) {
        $http.get(API.url + 'galeria/' + idEvento).then(function (res) {
            callback(res.data);
        })
    }


    function getAll(idEvento, callback) {
        $http.get(API.url + 'galeria/' + idEvento).then(function (response) { callback(response) });
    }

    function salvar(galeria, callback) {
        if (galeria.id) {
            return galeria.id;
        } else {
            $http.post(API.url + 'galeria', galeria).then(function (response) { callback(response.data) });
        }
    };

    function excluir(id, callback) {
        $http.delete(API.url + 'galeria/' + id).then(function (response) { callback(response) });
    }

    function salvarFoto(foto, callback) {
        $http.post(API.url + 'foto', foto).then(function (res) {
            callback(res.data);
        })
    }

    function getFotos(idEvento, callback) {
        $http.get(API.url + 'foto/' + idEvento).then(function (res) {
            callback(res.data);
        })
    }

}