angular.module('app.services')
    .factory('PaginasService', paginasService);

function paginasService($http, SessionService, API) {

    return {
        buscar: buscar,
        salvar: salvar,
        excluir: excluir
    }

    function buscar(idEvento, callback) {
        $http.get(API.url + 'paginas/' + idEvento).then(function (response) {
            callback(response)
        });
    }

    function salvar(pagina, callback) {
        if (pagina.id) {
            $http.put(API.url + 'pagina/' + pagina.id, pagina).then(function (response) {
                callback(response.data)
            });
        } else {
            $http.post(API.url + 'pagina', pagina).then(function (response) {
                callback(response.data)
            });
        }
    }

    function excluir(id, callback) {
        $http.delete(API.url + 'pagina/' + id).then(function (response) {
            callback(response)
        });
    }
}
