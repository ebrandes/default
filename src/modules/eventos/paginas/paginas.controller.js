angular.module('app.modules')
    .controller('paginasCtrl', paginasCtrl);

function paginasCtrl($scope, $modal, $templateCache, ModalService, HelperService) {
    // variaveis

    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.novaPagina = novaPagina;

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
    
    function novaPagina() {

        var modalCadastro = $modal({
                template: $templateCache.get('eventos/paginas/pagina-cadastro.modal.html'),
                show: true,
                controller: paginaCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    pagina: this.pagina
                }
            });
    }
}
