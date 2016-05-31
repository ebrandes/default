angular.module('app.modules')
    .controller('arquivoCadastroCtrl', arquivoCadastroCtrl);

function arquivoCadastroCtrl(HelperService, $modal, arquivo) {
    //variables

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}