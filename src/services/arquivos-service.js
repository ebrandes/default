angular.module('app.services')
    .factory('ArquivoService', arquivoService);

function arquivoService($http, SessionService, API, md5) {

    return {
        salvarArquivo: salvarArquivo,
        getArquivos: getArquivos,
        excluirArquivo: excluirArquivo,
        getArquivoNome: getArquivoNome,
        getArquivoUrl: getArquivoUrl
    }

    function getArquivoUrl(usuario, id, callback) {
        var u = angular.copy(usuario);
        u.senha = usuario.senha || '';
        $http.post(API.url + 'arquivo/url/' + id, {user: u}).then(function (res) {
            callback(res);
        });
    }

    function getArquivoNome(id, callback) {
        $http.get(API.url + 'arquivo/nome/' + id).then(function (res) {
            callback(res);
        })
    }

    function excluirArquivo(id, callback) {
        $http.delete(API.url + 'arquivo/' + id).then(function (res) {
            callback(res);
        })
    }

    function getArquivos(idEvento, callback) {
        $http.get(API.url + 'arquivo/' + idEvento).then(function (res) {
            callback(res);
        })
    }

    function salvarArquivo(arquivo, callback) {
        $http.post(API.url + 'arquivo/', arquivo).then(function (res) {
            callback(res);
        })
    }

}
