angular.module('app.modules')
    .controller('eventosCtrl', eventosCtrl);

function eventosCtrl($scope, $rootScope, $modal, $templateCache, ModalService, HelperService, EventosService) {
    //variables
    var vm = this;
    vm.listMode = false;
    vm.eventoSelecionado = {};
    vm.eventoList = [];

    //definition
    vm.salvar = salvar;
    vm.buscar = buscar;
    vm.excluir = excluir;
    vm.novoEvento = novoEvento;
    vm.init = init;

    // implementation
    function init() {
        $rootScope.isInEvent = false;
        buscar();
    }
    
    function salvar() {
        
    }

    function buscar() {
        EventosService.getAll(function (response) {
            if (response.data.success) {
                vm.eventoList = response.data.eventoList;
            } else {
                alert('ERRO!');
            }
        });
    }

    function novoEvento(evento) {
        if (!evento) {
            vm.eventoSelecionado = {};
        } else {
            vm.eventoSelecionado = evento;
        }
        var modalCadastro =
            $modal({
                template: $templateCache.get('eventos/cadastro-evento.modal.html'),
                show: true,
                controller: eventoCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    evento: vm.eventoSelecionado
                }
            });
    }

    function excluir(index) {
        ModalService.openModalConfirmation({
            content: 'Deseja realmente excluir o evento?',
            showCancel: true,
            confirmFunction: function () {
                //vm.eventos.split(index, 1);
                console.log("Evento excluído com sucesso.");
            }
        });
    }
}