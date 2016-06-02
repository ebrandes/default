angular.module('app.modules')
    .controller('eventosCtrl', eventosCtrl);

function eventosCtrl($state, $rootScope, $modal, $templateCache, ModalService, HelperService, EventosService) {

    // variables
    var vm = this;
    vm.listMode = false;
    vm.eventoSelecionado = {};
    vm.eventoList = [];

    // definition
    vm.buscar = buscar;
    vm.excluir = excluir;
    vm.novoEvento = novoEvento;
    vm.acessar = acessar;

    // implementation
    buscar();

    function acessar(idEvento) {
        $state.transitionTo('eventos.dashboard', { id: idEvento });
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

    function excluir(evento) {
        ModalService.openModalConfirmation({
            content: 'Deseja realmente excluir o evento ' + evento.nome + '?',
            showCancel: true,
            confirmFunction: function () {
                EventosService.excluir(evento.id, function (response) {
                    buscar();
                }, function(err){
                    console.log(err);
                });
            }
        });
    }
}