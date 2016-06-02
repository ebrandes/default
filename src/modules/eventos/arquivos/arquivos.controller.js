angular.module('app.modules')
    .controller('arquivosCtrl', arquivosCtrl);

function arquivosCtrl($stateParams, $rootScope, $modal, $templateCache, ArquivoService) {
    // variaveis
    $rootScope.isInEvent = true;
    var vm = this;
    vm.id_evento = $stateParams.id;
    vm.lista = [];

    // definição
    vm.salvar = salvar;
    vm.buscar = buscar;
    vm.excluir = excluir;
    vm.enviarArquivo = enviarArquivo;

    // implementação
    buscar();
    function salvar() {
        return;
    }

    function buscar() {
        ArquivoService.getArquivos(vm.id_evento, function (response) {
            console.log(response);
            vm.lista = response.data.listaArquivos;
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

    function enviarArquivo() {

        var modalCadastro = $modal({
            template: $templateCache.get('eventos/arquivos/arquivo-cadastro.modal.html'),
            show: true,
            controller: arquivoCadastroCtrl,
            controllerAs: 'vm',
            locals: {
                arquivo: vm.arquivoSelecionado
            }
        });
    }
}
