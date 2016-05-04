angular.module('app.modules')
    .controller('dashboardCtrl', dashboardCtrl);

function dashboardCtrl($rootScope) {
    this.init = init;
    
    function init() {
        $rootScope.isInEvent = true;
    }
}