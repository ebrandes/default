angular.module('app.modules')
    .controller('relatorioQtdAcessosCtrl', relatorioQtdAcessosCtrl);

function relatorioQtdAcessosCtrl(pesquisa) {
    // variáveis
    var vm = this;

    // definição
    this.fechaModal = fechaModal;

    // implementação
    function fechaModal() {
        $modal.hide();
    }
}