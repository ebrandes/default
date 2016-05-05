angular.module('app.modules')
    .controller('noticiaCadastroCtrl', noticiaCadastroCtrl);

function noticiaCadastroCtrl(HelperService, $modal, noticia) {

    //variables
    if (noticia) {
        this.id = noticia.id;
        this.titulo = noticia.titulo;
        this.data = noticia.data;
        this.imagem = noticia.imagem;
        this.descricao = noticia.descricao;
        this.idEvento = noticia.idEvento;
        this.idUsuario = noticia.idUsuario;
        this.backoffice = noticia.backoffice;
    }
    this.tabAtiva = 'noticia';
    //definitions
    this.closeModal = closeModal;
    this.removeImage = removeImage;

    //functions
    function removeImage() {
        this.imagem = null;
    }

    function closeModal() {
        $modal.hide();
    }

}