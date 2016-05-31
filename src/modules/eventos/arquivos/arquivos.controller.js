angular.module('app.modules')
    .controller('arquivosCtrl', arquivosCtrl);

function arquivosCtrl($scope, $modal, $templateCache, ModalService, HelperService) {
    // variaveis

    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.enviarArquivo = enviarArquivo;

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
    
    function enviarArquivo() {

        var modalCadastro = $modal({
                template: $templateCache.get('eventos/arquivos/arquivo-cadastro.modal.html'),
                show: true,
                controller: arquivoCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    arquivo: this.arquivoSelecionado
                }
            });
    }
}
