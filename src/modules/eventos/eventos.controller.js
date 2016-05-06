angular.module('app.modules')
    .controller('eventosCtrl', eventosCtrl);

function eventosCtrl($scope, $rootScope, $modal, $templateCache, ModalService, HelperService) {
    //variables
    this.listMode = false;
    this.eventoSelecionado = {};
    //definition
    this.init = init;
    this.changeMode = changeMode;
    this.excluirEvento = excluirEvento;
    this.novoEvento = novoEvento;

    function init() {
        $rootScope.isInEvent = false;
    }

    function novoEvento(evento) {
        if (!evento) {
            this.eventoSelecionado = {};
        } else {
            this.eventoSelecionado = evento;
        }
        var modalCadastro =
            $modal({
                template: $templateCache.get('eventos/cadastro-evento.modal.html'),
                show: true,
                controller: eventoCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    evento: this.eventoSelecionado
                }
            });
    }


    function excluirEvento(index) {
        ModalService.openModalConfirmation({
            content: 'Deseja realmente excluir o evento?',
            showCancel: true,
            confirmFunction: function () {
                //this.eventos.split(index, 1);
                console.log("Evento excluído com sucesso.");
            }
        });
    }

    function changeMode() {
        this.listMode = !this.listMode;
    }

}
