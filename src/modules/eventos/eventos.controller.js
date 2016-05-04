angular.module('app.modules')
    .controller('eventosCtrl', eventosCtrl);

function eventosCtrl(HelperService, $scope, $modal, $templateCache) {
    //variables
    this.listMode = false;
    this.eventoSelecionado = {};
    //definition
    this.changeMode = changeMode;
    this.excluirEvento = excluirEvento;
    this.novoEvento = novoEvento;

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
                controllerAs: 'eventoCadastro',
                locals: {
                    evento: this.eventoSelecionado
                }
            });
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
