angular.module('app.services')
    .factory('EventosService', eventosService);

function eventosService($http, API) {
    return {
        getAll: getAll
    }

    function getAll(callback) {
        $http.get(API.URL + 'eventos').then(function(res) {
            callback(res.data)
        })
    }
}
