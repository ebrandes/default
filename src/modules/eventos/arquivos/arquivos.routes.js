angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.arquivos', {
                url: '/:id/arquivos',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/arquivos/arquivos.html');
                        },
                        controller: 'arquivosCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })