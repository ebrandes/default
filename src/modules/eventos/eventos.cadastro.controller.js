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
        this.permitirOptativas = (evento.permitirOptativas) ? evento.permitirOptativas : 'false';
        this.informacao = {};
    }
    this.tabAtiva = "evento";
    
    //definitions
    this.closeModal = closeModal;
    this.removeImage = removeImage;
    this.proximaTab = proximaTab;
    this.adicionarFilho = adicionarFilho;
    
    //functions
    function proximaTab() {
        if (this.tabAtiva == "info") {
            HelperService.showAlert({
                content: "Salvando evento..."
            });
        } else {
            this.tabAtiva = "config";
        }
    }

    function removeImage() {
        this.imagem = null;
    }

    function closeModal() {
        $modal.hide();
    }
    
    function adicionarFilho() {
        vm.informacao.filhos.unshift({
            nome: '',
            descricao: ''
        });
    }
}
