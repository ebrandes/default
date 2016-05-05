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
    'angular-md5'
];
angular.module('app', dependencies)
    .run(function($state, $rootScope, $location, SessionService) {

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams, options) {
                if ($location.$$path == '/login') {
                    $rootScope.showMenu = false;
                } else {
                    $rootScope.showMenu = true;
                }
            })

        if (SessionService.session) {
            console.log(SessionService.session);
        }

        $rootScope.isInEvent = false;
    })
    .config(function($urlRouterProvider, $alertProvider, $datepickerProvider, $timepickerProvider, $tooltipProvider, $tabProvider) {
        $urlRouterProvider.otherwise('/');
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
        'url': 'http://192.168.0.76:3000/eventos/api/'
    })
