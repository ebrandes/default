angular.module('app.services')
    .factory('SessionService', SessionService);

function SessionService($localStorage) {

    return {
        setSession: setSession
    }


    function setSession(session) {
        $localStorage.session = session;
    }

}
