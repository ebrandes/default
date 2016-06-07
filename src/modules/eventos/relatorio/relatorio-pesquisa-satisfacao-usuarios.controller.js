angular.module('app.modules')
    .controller('relatorioPesquisaSatisfacaoUsuariosCtrl', relatorioPesquisaSatisfacaoUsuariosCtrl);

function relatorioPesquisaSatisfacaoUsuariosCtrl($rootScope, resposta) {
    // variáveis
    var vm = this;
    vm.usuariosAExibir = resposta.usuarios;

    // definição
    vm.fechaModal = fechaModal;
    vm.imprimir = imprimir;

    // implementação
    function fechaModal() {
        $rootScope.mostrarUsuario = false;
        console.log($rootScope.mostrarUsuario);
    }
    
    function imprimir() {
        window.print();
    }
}