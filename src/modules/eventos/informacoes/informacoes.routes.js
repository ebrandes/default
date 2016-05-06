angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.informacoes', {
                url: '/:id/informacoes',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/informacoes/informacoes.html');
                        },
                        controller: 'informacoesCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })
