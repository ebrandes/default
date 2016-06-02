angular.module('app.modules')
    .controller('paginasCtrl', paginasCtrl);

function paginasCtrl($scope, $stateParams, $rootScope, $modal, $templateCache, ModalService, HelperService, PaginasService) {
    // variables
    $rootScope.isInEvent = true;
    var vm = this;
    vm.id_evento = $stateParams.id;
    vm.lista = [];
    
    // definition
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.novaPagina = novaPagina;

    // implementation
    buscar();
    function salvar() {
        return;
    }

    function buscar() {
        PaginasService.buscar(vm.id_evento, function (response) {
            vm.lista = response.data.pagina;
        }, function(err){
            console.log(err);
        });
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
