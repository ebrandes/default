angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.galeria', {
                url: '/:id/galeria',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/galeria/galeria.html');
                        },
                        controller: 'galeriaCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })
