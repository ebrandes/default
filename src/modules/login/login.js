angular.module('app.modules')
    .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $state, $rootScope, HelperService, SessionService) {
    var vm = this;
    var alert;
    $scope.login = login;


    function login(frm) {
        if (frm.$invalid) {
            return;
        }

        if ($scope.user.login != 'ntcmobile' || $scope.user.senha != '123') {
            if (alert) {
                alert.hide();
            }
            alert = HelperService.showAlert({
                container: ".box-errors-login",
                type: 'danger',
                placement: 'fixed',
                animation: 'none',
                content: 'Login ou senha inválidos.',
            });

        } else {

            var session = {
                nome: "Eduardo Brandes",
                email: "eduardocbrandes@gmail.com",
                imagem: ""
            };

            SessionService.setSession(session);
            $state.go("main");
        }
    }
}
