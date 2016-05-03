angular.module('app.modules')
    .controller('eventosCtrl', eventosCtrl);

function eventosCtrl(HelperService, $scope, $modal, $templateCache) {
    //variables
    this.listMode = false;
    //definition
    this.changeMode = changeMode;
    this.excluirEvento = excluirEvento;
    this.novoEvento = novoEvento;
    this.closeModal = closeModal;
    //functions
    function novoEvento() {
        var modalCadastro =
            $modal({
                template: $templateCache.get('eventos/cadastro-evento.modal.html'),
                show: true,
                scope: $scope
            });
    }

    function closeModal() {
        $modal.hide();
    }

    function excluirEvento(index) {
        HelperService.openModalConfirmation({
            content: 'Deseja realmente excluir o evento?',
            showCancel: true,
            confirmFunction: function() {
                //this.eventos.split(index, 1);
                console.log("Evento excluído com sucesso.");
            }
        });
    }

    function changeMode() {
        this.listMode = !this.listMode;
    }

}
