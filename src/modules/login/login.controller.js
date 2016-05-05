angular.module('app.modules')
    .controller('loginCtrl', loginCtrl);

function loginCtrl($state, $rootScope, HelperService, SessionService, LoginService) {

    //variables
    var alert;

    //functions
    this.doLogin = doLogin;

    function doLogin(frm) {

        var user = {
            email: this.email,
            senha: this.senha
        }

        if (frm.$invalid) {
            return;
        }

        LoginService.doLogin(user, function(res) {
            if (res.success) {
                if (res.usuario) {
                    SessionService.setSession(res.data);
                    $state.go("main");
                } else {
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
                }
            } else {
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
            }
        })
    }
}
