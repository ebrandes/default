angular.module('app.modules')
    .controller('notificacoesCtrl', notificacoesCtrl);

function notificacoesCtrl($scope, $rootScope, $stateParams, $modal, $templateCache, ModalService, HelperService, NotificacoesService) {
    // variaveis
    $rootScope.isInEvent = true;
    var vm = this;
    vm.id_evento = $stateParams.id;
    vm.lista = [];

    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.novaNotificacao = novaNotificacao;

    // implementação
    buscar();
    function salvar() {
        return;
    }

    function buscar() {
        NotificacoesService.getAll(vm.id_evento, function (response) {
            vm.lista = response.data.notificacoes;
        }, function (err) {
            console.log(err);
        });
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
