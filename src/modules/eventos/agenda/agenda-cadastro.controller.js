angular.module('app.modules')
    .controller('agendaCadastroCtrl', agendaCadastroCtrl);

function agendaCadastroCtrl(HelperService, $modal, agenda) {
    //variables
    this.tabAtiva = "informacoes";
    this.palestra = false;
    this.permitirAvaliacao = false;
    this.permitirAvaliacao = false;

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}