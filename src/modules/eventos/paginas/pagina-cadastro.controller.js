angular.module('app.modules')
    .controller('paginaCadastroCtrl', paginaCadastroCtrl);

function paginaCadastroCtrl(HelperService, $modal, pagina) {
    //variables

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}