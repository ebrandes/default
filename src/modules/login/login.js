angular.module('app.modules')
    .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $state, $rootScope, HelperService, SessionService) {
    var vm = this;
    $scope.login = login;


    function login(frm) {
        if (frm.$invalid) {
            return;
        }

        if ($scope.user.login != 'ntcmobile' || $scope.user.senha != '123') {
            HelperService.showAlert({
                container: ".box-errors-login",
                type: 'danger',
                placement: 'relative',
                content: 'Login ou senha inválidos.'
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
