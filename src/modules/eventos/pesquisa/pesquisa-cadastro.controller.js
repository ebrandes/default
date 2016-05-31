angular.module('app.modules')
    .controller('pesquisaCadastroCtrl', pesquisaCadastroCtrl);

function pesquisaCadastroCtrl(HelperService, $modal, pesquisa) {
    //variables
    this.optativa = 'false';

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}