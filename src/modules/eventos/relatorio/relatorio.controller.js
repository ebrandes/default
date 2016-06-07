angular.module('app.modules')
    .controller('relatorioCtrl', relatorioCtrl);

function relatorioCtrl($rootScope, $modal, $templateCache, ModalService, HelperService) {
    // variáveis
    var vm = this;
    $rootScope.isInEvent = true;

    // definição
    vm.abrir = abrir;
    
    // implementação
    function abrir(tipo) {
        
        var pathModalTemplate = 'eventos/relatorio/';
        switch (tipo) {
            case 'pesquisaSatisfacao':
                var modal = pathModalTemplate + 'relatorio-pesquisa-satisfacao.modal.html';
                var controller = 'relatorioPesquisaSatisfacaoCtrl';
                break;
            case 'qtdLogados':
                var modal = pathModalTemplate + 'relatorio-quantidade-logados.modal.html';
                var controller = 'relatorioQtdLogadosCtrl';
                break;
            case 'qtdAcessos':
                var modal = pathModalTemplate + 'relatorio-quantidade-acesso.modal.html';
                var controller = 'relatorioQtdAcessosCtrl';
                break;
            default:
                break;
        }

        var modalCadastro =
            $modal({
                template: $templateCache.get(modal),
                show: true,
                controller: controller,
                controllerAs: 'vm',
                locals: {
                    pesquisa: vm.pesquisa
                }
            });
    }
}