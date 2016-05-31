angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.notificacoes', {
                url: '/:id/notificacoes',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/notificacoes/notificacoes.html');
                        },
                        controller: 'notificacoesCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })