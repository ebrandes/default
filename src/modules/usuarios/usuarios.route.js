angular.module('app.modules')
    .config(function($stateProvider) {
        $stateProvider
            .state('usuarios', {
                url: '/usuarios',
                templateProvider: function($templateCache) {
                    return $templateCache.get('usuarios/usuarios.html');
                },
                controller: 'usuariosCtrl'
            })
    });
