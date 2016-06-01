angular.module('app.services')
    .factory('LoginService', loginService);

function loginService($http, SessionService, API) {
    return {
        doLogin: doLogin,
        salvarCadastro: salvarCadastro
    }

    function salvarCadastro(usuario, callback) {
        $http.post(API.url + 'criar-usuario', usuario).then(function (response) { callback(response) });
    }

    function doLogin(usuario, callback) {
        $http.post(API.url + 'login-administrador', usuario).then(function (response) { callback(response) });
    };

}