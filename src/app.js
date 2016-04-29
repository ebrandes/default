var dependencies = [
    'app.modules',
    'mgcrea.ngStrap',
    'ngAnimate',
    'ngMessages',
    'templates',
    'services',
    'directives',
    'ngFileUpload'
];
angular.module('app', dependencies)
    .run(function ($state) {
        $state.go('main');
    })
    .config(function ($urlRouterProvider, $alertProvider, $datepickerProvider, $timepickerProvider) {
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
        })
    })
