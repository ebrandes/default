angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.noticias', {
                url: '/:id/noticias',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('eventos/noticias/noticias.html');
                },
                controller: 'noticiasCtrl',
                controllerAs: 'vm'
            })
    })