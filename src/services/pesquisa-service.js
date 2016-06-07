angular.module('app.services')
    .factory('PesquisaService', pesquisaService);

function pesquisaService($http, API) {

    return {
    	listar: listar,
        salvar: salvar,
        excluir: excluir,
    }

    function listar(idEvento, callback) {
		$http.get(API.url + 'pesquisa/' + idEvento).then(function(response) {
            callback(response.data)
        });
    }

    function salvar(pesquisa, callback) {
        $http.post(API.url + 'pesquisa', pesquisa).then(function(response) {
            callback(response.data)
        });
    };

    function excluir(id, callback) {
        $http.delete(API.url + 'pesquisa/' + id).then(function(response) {
            callback(response)
        });
    }
}
