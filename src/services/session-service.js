angular.module('app.services')
    .factory('SessionService', SessionService);

function SessionService($localStorage) {

    return {
        setSession: setSession,
        getSession: getSession
    }


    function setSession(session) {
        $localStorage.session = session;
    }

    function getSession() {
        return $localStorage.session;
    }

}
