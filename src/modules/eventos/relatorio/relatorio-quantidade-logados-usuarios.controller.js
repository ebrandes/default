angular.module('app.modules')
    .controller('relatorioQtdLogadosUsuariosCtrl', relatorioQtdLogadosUsuariosCtrl);

function relatorioQtdLogadosUsuariosCtrl(usuarios) {

    // variáveis
    var vm = this;
    vm.usuariosAExibir = usuarios;

    // definição
    vm.imprimir = imprimir;

    // implementação
    function imprimir() {
        window.print();
    }
};