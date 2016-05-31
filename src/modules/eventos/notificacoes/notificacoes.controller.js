angular.module('app.modules')
    .controller('notificacoesCtrl', notificacoesCtrl);

function notificacoesCtrl($scope, $modal, $templateCache, ModalService, HelperService) {
    // variaveis

    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.novaNotificacao = novaNotificacao;

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
    
    function novaNotificacao() {

        var modalCadastro = $modal({
                template: $templateCache.get('eventos/notificacoes/notificacao-cadastro.modal.html'),
                show: true,
                controller: notificacaoCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    notificacao: this.notificacaoSelecionado
                }
            });
    }
}
