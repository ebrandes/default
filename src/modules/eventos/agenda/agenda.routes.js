angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.agenda', {
                url: '/:id/agenda',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/agenda/agenda.html');
                        },
                        controller: 'agendaCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })