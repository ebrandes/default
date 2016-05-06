angular.module('app.services')
    .factory('ModalService', modalService);

function modalService($modal, $rootScope, $templateCache) {
    return {
        openModalConfirmation: openModalConfirmation
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