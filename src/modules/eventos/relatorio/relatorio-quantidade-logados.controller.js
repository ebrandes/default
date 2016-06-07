angular.module('app.modules')
    .controller('relatorioQtdLogadosCtrl', relatorioQtdLogadosCtrl);

function relatorioQtdLogadosCtrl(HelperService, $modal, pesquisa) {
    //variables
    this.optativa = 'false';

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}