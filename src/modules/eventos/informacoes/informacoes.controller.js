angular
    .module('app.modules')
    .controller('informacoesCtrl', informacoesCtrl);

function informacoesCtrl(HelperService, $log, $modal, $templateCache, $scope) {
    var vm = this;
    var tiposInformacoes = ['lista', 'informacao'];

    vm.excluirInformacao = excluirInformacao;
    vm.adicionarInformacao = adicionarInformacao;
    vm.editarInformacao = editarInformacao;

    vm.informacoes = buscarInformacoes();
    vm.modalInformacoes = {
        modal: null,
        scope: null
    };

    criarInformacoesFormModal();

    function criarInformacoesFormModal() {
        var modalScope = $scope.$new(true);
        vm.modalInformacoes.modal = $modal({
            template: $templateCache.get('eventos/informacoes/informacoes-form.modal.html'),
            scope: modalScope,
            controller: 'informacoesFormCtrl',
            controllerAs: 'vm',
            prefixEvent: 'informacoesModal',
            show: false,
        });
        vm.modalInformacoes.scope = modalScope;
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
        HelperService.openModalConfirmation({
            content: 'Deseja realmente excluir esta informação?',
            showCancel: true,
            confirmFunction: function() {
                $log.log("informação excluída com sucesso.", informacao);
            }
        });
    }

    function buscarInformacoes() {
        var informacoes = [];
        var informacao, i, j;
        for (i = 0; i < 6; i++) {
            if (i % 2 == 0) {
                informacao = {
                    nome: 'Lorem ipsum',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique rutrum sapien, vitae ultrices sem vestibulum id. Aenean laoreet varius dui non sollicitudin. Donec volutpat venenatis urna, sed hendrerit libero tristique a. Aliquam dictum lacus eget diam rhoncus ornare. Quisque in pretium dolor.'
                };
            } else {
                informacao = {
                    nome: 'Lorem ipsum',
                    filhos: []
                };
                for (j = 0; j < 3; j++) {
                    informacao.filhos.push({
                        nome: 'Lorem ipsum dolor',
                        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    });
                }
            }
            informacoes.push(informacao);
        }
        return informacoes;
    }
}
