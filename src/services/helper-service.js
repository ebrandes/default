angular.module('app.services')
    .factory('HelperService', HelperService);

function HelperService($rootScope) {
    return {
        showLoader: showLoader,
        hideLoader: hideLoader
    }

    function showLoader(callback) {
        $rootScope.loader = true;
        if (callback) {
            callback();
        }
    }

    function hideLoader(callback) {
        $rootScope.loader = false;
        if (callback) {
            callback();
        }
    }
}
