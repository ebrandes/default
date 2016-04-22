angular.module('services')
    .factory('HelperService', HelperService);

function HelperService($modal, $rootScope, $alert, $templateCache) {
    return {
        openModalConfirmation: openModalConfirmation,
        showAlert: showAlert
    }


    function showAlert(options) {

        if (!options) {
            options = {};
        }

        $alert({
            title: (options.title) ? options.title : '',
            content: (options.content) ? options.content : 'Best check yo self, you\'re not looking too good.',
            placement: 'top',
            type: (options.type) ? options.type : 'info',
            keyboard: true,
            show: true,
            placement: 'top-right',
            duration: (options.duration) ? options.duration : 3,
            container: '.box-alert'
        });
    }

    function openModalConfirmation(options) {

        if (!options) {
            options = {};
        }
        console.log(options);
        var modalOptions = {
            title: (options.title) ? options.title : 'Atenção',
            content: (options.content) ? options.content : 'Você realmente deseja prosseguir com está operação?',
            okText: (options.okText) ? options.okText : 'Confirmar',
            cancelText: (options.cancelText) ? options.cancelText : 'Cancelar',
            showCancel: (options.showCancel === false) ? options.showCancel : true,
            confirmFunction: (options.confirmFunction) ? options.confirmFunction : function () {
                console.log("modalClosed");
            },
            cancelFunction: (options.cancelFunction) ? options.cancelFunction : function () {
                console.log("modalClosed");
            }
        };

        var scope = $rootScope.$new();
        scope.optionModalOpened = modalOptions;
        scope.answer = function (res) {
            if (res) {
                modalOptions.confirmFunction();
            } else {
                modalOptions.cancelFunction();
            }
            modal.hide();
        }

        var modal = $modal({
            template: $templateCache.get('modals/confirmation.html'),
            scope: scope,
            show: true,
            container: 'body'
        });
        return modal;

    }

}