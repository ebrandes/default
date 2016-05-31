angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.paginas', {
                url: '/:id/paginas',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/paginas/paginas.html');
                        },
                        controller: 'paginasCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })