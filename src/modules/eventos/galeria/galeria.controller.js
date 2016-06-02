angular
    .module('app.modules')
    .controller('galeriaCtrl', galeriaCtrl);

function galeriaCtrl($modal, $templateCache, $scope, ModalService, GaleriaService, $stateParams, $rootScope) {
    // variáveis
    $rootScope.isInEvent = true;
    var vm = this;
    vm.id_evento = $stateParams.id;
    vm.lista = [];
    
    // definição
    this.salvar = salvar;
    this.buscar = buscar;
    this.listar = listar;
    this.excluir = excluir;
    this.adicionarFoto = adicionarFoto;

    // implementação
    buscar();

    function salvar() {
        return;
    }

    function buscar() {
        GaleriaService.getFotos(vm.id_evento, function (response) {
            console.log(response);
            vm.lista = response.fotos;
        }, function (err) {
            console.log(err);
        })

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
