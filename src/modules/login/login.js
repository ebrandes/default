angular.module('app.modules')
.controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $state, $rootScope, HelperService) {
  var vm = this;
  $scope.login = login;

  function login(frm) {
    if (frm.$invalid) {
      return;
    }

    if ($scope.user.login != 'ntcmobile' || $scope.user.senha != '123') {
      HelperService.showAlert({
        type: 'danger',
        content: 'Login ou senha inválidos.',
        duration: 2
      });
    } else {
      $state.go("main");
    }
  }
}
