angular.module('app.modules')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/:id/dashboard',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('dashboard/dashboard.html');
                },
                controller: 'dashboardCtrl',
                controllerAs: 'dashboard'
            })
    })