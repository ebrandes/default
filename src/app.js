var dependencies = [
    'app.modules',
    'templates',
    'app.services',
    'app.directives',
    'mgcrea.ngStrap',
    'ngAnimate',
    'ngStorage',
    'ngMessages',
    'ngFileUpload'
];
angular.module('app', dependencies)
    .run(function($state, $rootScope) {
        $state.go('eventos');
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
    .constants('API', {
        'URL': 'http://192.168.0.77:3000/eventos/api/'
    })
