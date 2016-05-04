angular.module('app.services')
    .factory('LoginService', loginService);

function loginService($http, API, md5) {
    return {
        doLogin: doLogin
    }

    function doLogin(user, callback) {
        $http.post(API.url + '/login-administrador', user).then(function(response) {
            callback(response.data);
        });
    }

}
