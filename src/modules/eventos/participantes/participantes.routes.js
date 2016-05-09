angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.participantes', {
                url: '/:id/participantes',
                views: {
                    '@': {
                        template: '<participantes></participantes>'
                        //templateProvider: function ($templateCache) {
                        //    return '<participantes></participantes>'; //$templateCache.get('eventos/participantes/participantes.html');
                        //},
                        //controller: 'participantesCtrl',
                        //controllerAs: 'vm'
                    }
                }
            })
    })
