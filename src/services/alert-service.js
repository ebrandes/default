angular.module('app.services')

    .factory('AlertService', alertService);

function alertService($alert) {
    return {
        showAlert: showAlert
    }

    function showAlert(options) {

        if (!options) {
            options = {};
        }

        return $alert({
            title: (options.title) ? options.title : '',
            content: (options.content) ? options.content : 'Best check yo self, you\'re not looking too good.',
            type: (options.type) ? options.type : 'info',
            keyboard: true,
            show: true,
            animation: (options.animation) ? options.animation : 'am-fade',
            placement: (options.placement) ? options.placement : 'top-right',
            duration: (options.duration) ? options.duration : null,
            container: (options.container) ? options.container : '.box-alert'
        });
    }
}