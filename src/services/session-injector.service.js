angular.module('app.services').factory('sessionInjector', function ($location, SessionService, $rootScope) {
    var sessionInjector = {
        request: function (config) {
            var current = SessionService.getSession();
            config.headers['backoffice'] = true;
            if (current) {
                config.headers['api-token'] = current.token;
            }
            return config;
        },
        responseError: function (response) {
            console.log("response interceptor: ", response);
            console.log($location.path());
            if (response.status === 401 && !(response.data && response.data.stopRedirect)) {
                $rootScope.$broadcast('unauthorized');
            }
            if(response.data && response.data.message) {
                alert(response.data.message);
            }
            return response;
        }
    };
    return sessionInjector;
});
angular.module('app.services').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
}]);