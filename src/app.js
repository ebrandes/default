var dependencies = [
    'app.modules',
    'templates',
    'app.services',
    'app.directives',
    'mgcrea.ngStrap',
    'ngAnimate',
    'ngStorage',
    'ngMessages',
    'ngFileUpload',
    'angular-md5',
    'textAngular'
];
angular.module('app', dependencies)
    .run(function ($state, $rootScope, $location, SessionService) {

        $rootScope.showMenu = false;

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams, options) {
                if (toState.name != 'login') {
                    $rootScope.showMenu = true;
                } else {
                    $rootScope.showMenu = false;
                }
            })


        var usuario = SessionService.getSession();
        if (!usuario) {
            $state.go('login');
        }

        $rootScope.isInEvent = false;
        $state.go('eventos.participantes', { id: 1});
    })
    .config(function ($urlRouterProvider, $alertProvider, $datepickerProvider, $timepickerProvider, $tooltipProvider, $tabProvider) {
        $urlRouterProvider.otherwise('/eventos');
        //alerts
        angular.extend($alertProvider.defaults, {
            animation: 'am-fade-and-slide-top',
            placement: 'top'
        });
        //datepicker e timepicker
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'dd/MM/yyyy',
            iconLeft: 'fa fa-angle-left',
            iconRight: 'fa fa-angle-right',
            startWeek: 1
        });
        angular.extend($timepickerProvider.defaults, {
            iconUp: 'fa fa-angle-up',
            iconDown: 'fa fa-angle-down'
        });
        angular.extend($tooltipProvider.defaults, {
            animation: 'am-flip-x',
            trigger: 'hover'
        });
        angular.extend($tabProvider.defaults, {
            animation: 'am-flip-x'
        });
    })
    .constant('API', {
        'url': 'http://192.168.0.99:3000/eventos/api/'
    })
