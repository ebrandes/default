angular.module('app.modules')
    .controller('relatorioQtdLogadosCtrl', relatorioQtdLogadosCtrl);

function relatorioQtdLogadosCtrl($stateParams, $templateCache, $modal, RelatorioService) {
    //variables
    var vm = this;
    vm.id_evento = $stateParams.id;

    //definitions
    vm.activate = activate;
    vm.exibir = exibir;

    //functions
    activate();
    function activate() {
        RelatorioService.getRelatorioLogados(vm.id_evento, function (res) {
            if (res.data.success) {
                vm.convidados = res.data.convidados;
                vm.logadosEvento = res.data.logadosEvento;
                vm.logados = res.data.logados;
            } else {
                console.error(res.data);
            }
        });
    }

    function exibir(usuarios) {
        console.log(usuarios);
        var modalUsuario = $modal({
            template: $templateCache.get('eventos/relatorio/relatorio-quantidade-logados-usuarios.modal.html'),
            controller: relatorioQtdLogadosUsuariosCtrl,
            controllerAs: 'vm',
            locals: {
                usuarios: usuarios
            }
        });
    }
}