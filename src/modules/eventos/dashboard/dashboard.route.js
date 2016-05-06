angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('eventos.dashboard', {
                url: '/:id/dashboard',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('eventos/dashboard/dashboard.html');
                },
                controller: 'dashboardCtrl',
                controllerAs: 'dashboard'
            })
    })