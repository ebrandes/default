angular.module('app.modules')
    .controller('loginCtrl', loginCtrl);

function loginCtrl($state, $rootScope, AlertService, SessionService, LoginService) {

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

        LoginService.doLogin(user, function (res) {
            if (res.success) {
                if (res.usuario) {
                    SessionService.setSession(res.usuario);
                    $state.go("eventos");
                } else {
                    if (alert) {
                        alert.hide();
                    }
                    alert = AlertService.showAlert({
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
                alert = AlertService.showAlert({
                    container: ".box-errors-login",
                    type: 'danger',
                    placement: 'fixed',
                    animation: 'none',
                    content: 'Login ou senha inválidos.',
                });
            }
        }, function (err) {
            if (alert) {
                alert.hide();
            }
            alert = AlertService.showAlert({
                container: ".box-errors-login",
                type: 'danger',
                placement: 'fixed',
                animation: 'none',
                content: 'Erro de conexão. Tente novamente mais tarde.',
            });
        })
    }
}
