angular.module('app.modules')
    .controller('relatorioQtdAcessosCtrl', relatorioQtdAcessosCtrl);

function relatorioQtdAcessosCtrl(HelperService, $modal, pesquisa) {
    //variables
    this.optativa = 'false';

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}