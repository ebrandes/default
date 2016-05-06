angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.participantes', {
                url: '/:id/participantes',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/participantes/participantes.html');
                        },
                        controller: 'participantesCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })
