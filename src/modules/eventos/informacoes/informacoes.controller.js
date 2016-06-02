angular.module('app.modules')
    .controller('informacoesCtrl', informacoesCtrl);

function informacoesCtrl($rootScope, $log, $modal, $templateCache, $scope, ModalService, EventosService, $stateParams) {
    // variables
    $rootScope.isInEvent = true;
    var vm = this;
    var tiposInformacoes = ['lista', 'informacao'];
    vm.modalInformacoes = {
        modal: null,
        scope: null
    };
    vm.id_evento = $stateParams.id;
    vm.lista = [];

    // definition
    vm.excluirInformacao = excluirInformacao;
    vm.adicionarInformacao = adicionarInformacao;
    vm.editarInformacao = editarInformacao;
    vm.buscar = buscar;
    vm.adicionar = adicionar;

    // implementation
    buscar();

    function buscar() {
        EventosService.getInformacoes(vm.id_evento, function (response) {
            vm.lista = response.data.informacoes;
        }, function (err) {
            vm.lista = [];
            console.log(err);
        });
    }

    function adicionar(tipo, informacao) {
        var modalCadastro =
            $modal({
                template: $templateCache.get('eventos/informacoes/informacoes-form.modal.html'),
                show: true,
                controller: informacoesFormCtrl,
                controllerAs: 'vm',
                locals: {
                    informacao: vm.informacaoSelecionado
                }
            });
    }

    function adicionarInformacao(tipo) {
        if (tiposInformacoes.indexOf(tipo) < 0) {
            return;
        }
        vm.modalInformacoes.scope.tipo = tipo;
        vm.modalInformacoes.scope.acao = 'adicionar';
        vm.modalInformacoes.scope.informacao = null;
        vm.modalInformacoes.modal.show();
    }



    function editarInformacao(informacao) {
        vm.modalInformacoes.scope.tipo = informacao.filhos ? 'lista' : 'informacao';
        vm.modalInformacoes.scope.acao = 'editar';
        vm.modalInformacoes.scope.informacao = angular.copy(informacao);
        vm.modalInformacoes.modal.show();
    }

    function excluirInformacao(informacao) {
        ModalService.openModalConfirmation({
            content: 'Deseja realmente excluir esta informação?',
            showCancel: true,
            confirmFunction: function () {
                $log.log("informação excluída com sucesso.", informacao);
            }
        });
    }


}
