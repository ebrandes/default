angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.relatorio', {
                url: '/:id/relatorio',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/relatorio/relatorio.html');
                        },
                        controller: 'relatorioCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })
