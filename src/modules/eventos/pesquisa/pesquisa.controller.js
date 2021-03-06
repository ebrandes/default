angular.module('app.modules')
    .controller('pesquisaCtrl', pesquisaCtrl);

function pesquisaCtrl($scope, $modal, $templateCache, ModalService, HelperService) {

    // variaveis

    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.novaPesquisa = novaPesquisa;

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

    function novaPesquisa() {

        var modalCadastro = $modal({
                template: $templateCache.get('eventos/pesquisa/pesquisa-cadastro.modal.html'),
                show: true,
                controller: pesquisaCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    pesquisa: this.pesquisaSelecionada
                }
            });
    }

}
