angular
    .module('app.modules')
    .controller('galeriaCtrl', galeriaCtrl);

function galeriaCtrl($modal, $templateCache, $scope, ModalService) {
    // variáveis
    var vm = this;

    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.adicionarFoto = adicionarFoto;

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

    function adicionarFoto() {
        var modalCadastro = $modal({
            template: $templateCache.get('eventos/galeria/galeria-cadastro.modal.html'),
            show: true,
            controller: galeriaCadastroCtrl,
            controllerAs: 'vm',
            locals: {
                galeria: this.galeriaSelecionado
            }
        });
    }
}
