angular.module('app.modules')
    .controller('noticiasCtrl', noticiasCtrl);

function noticiasCtrl($scope, $modal, $templateCache, HelperService) {
    this.novaNoticia = novaNoticia;
    this.excluirNoticia = excluirNoticia;

    function novaNoticia(noticia) {
        if (!noticia) {
            this.noticiaSelecionada = {};
        } else {
            this.noticiaSelecionada = noticia;
        }
        var modalCadastro =
            $modal({
                template: $templateCache.get('eventos/noticias/cadastro-noticia.modal.html'),
                show: true,
                controller: noticiaCadastroCtrl,
                controllerAs: 'vm',
                locals: {
                    noticia: this.noticiaSelecionada
                }
            });
    }

    function excluirNoticia(index) {
        HelperService.openModalConfirmation({
            content: 'Deseja realmente excluir esta notícia?',
            showCancel: true,
            confirmFunction: function () {
                console.log("Noticia excluída com sucesso.");
            }
        });
    }
}
