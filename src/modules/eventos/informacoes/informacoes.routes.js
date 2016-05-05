angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('informacoes', {
                url: '/:id/informacoes',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('eventos/informacoes/informacoes.html');
                },
                controller: 'informacoesCtrl',
                controllerAs: 'vm'
            })
    })
