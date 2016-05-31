angular.module('app.modules')
    .controller('galeriaCadastroCtrl', galeriaCadastroCtrl);

function galeriaCadastroCtrl(HelperService, $modal, galeria) {
    //variables

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}