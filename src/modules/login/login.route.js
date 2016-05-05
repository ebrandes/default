angular.module('app.modules')
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateProvider: function($templateCache) {
                    return $templateCache.get('login/login.html');
                },
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
    });
