angular.module('app.services')
    .factory('SessionService', SessionService);

function SessionService($localStorage, $rootScope) {

    return {
        getSession: getSession,
        setSession: setSession,
        clearSession: clearSession
    }

    function clearSession() {
        if ($localStorage.session) {
            delete $localStorage.session;
            delete $localStorage.idUsuario;
        }
    }

    function getSession() {
        var session = ($localStorage.session) ? JSON.parse($localStorage.session) : null;
        if (session && session.usuario) {
            $rootScope.usuarioSessao = session.usuario.nome;
        }
        return session;
    }

    function setSession(data) {
        $localStorage.session = JSON.stringify({
            usuario: data.usuario,
            token: data.token
        });
        if (data.usuario) {
            $localStorage.idUsuario = data.usuario.id;
        }
    }

}
