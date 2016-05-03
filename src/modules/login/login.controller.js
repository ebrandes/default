angular.module('app.modules')
    .controller('loginCtrl', loginCtrl);

function loginCtrl($state, $rootScope, HelperService, SessionService) {

    //variables
    var alert;

    //functions
    this.login = login;


    function login(frm) {

        if (frm.$invalid) {
            return;
        }

        if (this.user.login != 'ntcmobile' || this.user.senha != '123') {
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
