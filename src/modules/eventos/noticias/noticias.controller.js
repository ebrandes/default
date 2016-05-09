angular.module('app.modules')
    .controller('noticiasCtrl', noticiasCtrl);

function noticiasCtrl($scope, $modal, $templateCache, ModalService) {
    this.noticias = buscarNoticias();
    this.novaNoticia = novaNoticia;
    this.excluirNoticia = excluirNoticia;
    this.tabs = [
        {
            "title": "Notícias"
        },
        {
            "title": "Posts"
        }
    ];
    this.tabs.activeTab = "Notícias";

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

    function buscarNoticias() {
        var noticias = [];
        var noticia = {};
        for (var i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                noticia = {
                    titulo: 'Notícia',
                    descricao: 'No mundo atual, a complexidade dos estudos efetuados estimula a padronização dos conhecimentos estratégicos para atingir a excelência.'
                    + 'Não obstante, a competitividade nas transações comerciais não pode mais se dissociar das condições inegavelmente apropriadas.',
                    imagem: 'http://placehold.it/80x80',
                    backoffice: 1
                }
            }
            else {
                noticia = {
                    titulo: 'Post',
                    descricao: 'No mundo atual, a complexidade dos estudos efetuados estimula a padronização dos conhecimentos estratégicos para atingir a excelência.'
                    + 'Não obstante, a competitividade nas transações comerciais não pode mais se dissociar das condições inegavelmente apropriadas.',
                    imagem: 'http://placehold.it/80x80',
                    backoffice: 0
                }
            }
            noticias.push(noticia);
        }
        return noticias;
    }

    function excluirNoticia(index) {
        ModalService.openModalConfirmation({
            content: 'Deseja realmente excluir esta notícia?',
            showCancel: true,
            confirmFunction: function () {
                console.log("Noticia excluída com sucesso.");
            }
        });
    }
}
