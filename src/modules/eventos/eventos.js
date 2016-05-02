angular.module('app.modules')
    .controller('eventosCtrl', eventosCtrl);

function eventosCtrl($scope, HelperService) {
    var vm = $scope;
    vm.eventoList = [];
}
