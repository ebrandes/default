angular.module('app.modules')
    .controller('notificacaoCadastroCtrl', notificacaoCadastroCtrl);

function notificacaoCadastroCtrl(HelperService, $modal, notificacao) {
    //variables
    this.agendamento = false;

    //definitions
    this.fechaModal = fechaModal;

    //functions
    function fechaModal() {
        $modal.hide();
    }
}