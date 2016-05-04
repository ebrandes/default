angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('noticias', {
                url: '/:id/noticias',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('eventos/noticias/noticias.html');
                },
                controller: 'noticiasCtrl',
                controllerAs: 'noticia'
            })
    })