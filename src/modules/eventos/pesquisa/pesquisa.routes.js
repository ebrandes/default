angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.pesquisa', {
                url: '/:id/pesquisa',
                views: {
                    '@': {
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('eventos/pesquisa/pesquisa.html');
                        },
                        controller: 'pesquisaCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    })