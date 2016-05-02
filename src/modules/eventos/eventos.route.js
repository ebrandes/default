angular.module('app.modules')
    .config(function($stateProvider) {
        $stateProvider
            .state('eventos', {
                url: '/eventos',
                templateProvider: function($templateCache) {
                    return $templateCache.get('eventos/evento.html');
                },
                controller: 'eventosCtrl'
            })
    });
