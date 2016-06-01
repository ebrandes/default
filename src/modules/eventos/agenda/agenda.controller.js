angular.module('app.modules')
    .controller('agendaCtrl', agendaCtrl);

function agendaCtrl($scope, $modal, $templateCache, ModalService, HelperService) {
    // variaveis

    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.novaAgenda = novaAgenda;

    // implementação
    function salvar() {
        return;
    }

    function buscar() {
        return;
    }

    function listar() {
        return;
    }
    
    function excluir() {
        return;
    }
    
    function novaAgenda() {

        var modalCadastro = $modal({
                template: $templateCache.get('eventos/agenda/agenda-cadastro.modal.html'),
                show: true,
                controller: agendaCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    agenda: this.agendaSelecionada
                }
            });
    }
}