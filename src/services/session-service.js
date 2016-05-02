angular.module('services')
    .factory('SessionService', SessionService);

function SessionService($sessionStorage) {
  
    return {
        setSession: setSession
    }


    function setSession(session) {
      $sessionStorage.set('session', session);
    }

}
