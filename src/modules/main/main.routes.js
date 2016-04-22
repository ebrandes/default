angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateProvider: function($templateCache){
                    return $templateCache.get('main/main.html');
                },
                controller: 'mainCtrl'
            })
    });