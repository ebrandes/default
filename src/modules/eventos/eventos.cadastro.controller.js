angular.module('app.modules')
    .controller('eventoCadastroCtrl', eventoCadastroCtrl);

function eventoCadastroCtrl(HelperService, $modal, evento) {

    //variables
    if (evento) {
        this.id = evento.id;
        this.titulo = evento.titulo;
        this.dataInicio = evento.dataInicio;
        this.dataFinal = evento.dataFinal;
        this.destaque = evento.destaque;
        this.imagem = evento.imagem;
        this.descricao = evento.descricao;
        this.permitirPosts = (evento.permitirPosts) ? evento.permitirPosts : 'false';
        this.permitirImagens = (evento.permitirImagens) ? evento.permitirImagens : 'false';
        this.perguntasPrivadas = (evento.perguntasPrivadas) ? evento.perguntasPrivadas : 'false';
    }
    this.tabAtiva = 'evento';
    //definitions
    this.closeModal = closeModal;
    this.removeImage = removeImage;
    this.proximaTab = proximaTab;

    //functions
    function proximaTab() {
        this.tabAtiva = 'configuration';
    }

    function removeImage() {
        this.imagem = null;
    }

    function closeModal() {
        $modal.hide();
    }

}
