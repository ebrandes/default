angular
    .module('app.modules')
    .controller('informacoesFormCtrl', informacoesFormCtrl);

function informacoesFormCtrl($scope, $log) {
    var vm = this;

    vm.acao = $scope.acao || 'adicionar';
    vm.tipo = $scope.tipo || 'informacao';
    vm.informacao = {};

    vm.adicionarFilho = adicionarFilho;
    vm.removerFilho = removerFilho;
    vm.salvar = salvar;
    vm.isTipo = isTipo;

    if ($scope.informacao) {
        vm.informacao = $scope.informacao;
    } else {
        criarInformacao();
    }

    function removerFilho(informacao, filho) {
        informacao.filhos.splice(informacao.filhos.indexOf(filho), 1);
    }

    function isTipo(tipo) {
        return tipo === vm.tipo;
    }

    function criarInformacao() {
        if (vm.tipo === 'lista') {
            vm.informacao.filhos = [];
        }
    }

    function salvar(informacao) {
        $log.log('registro salvo com sucesso!', informacao);
        $scope.$hide();
    }

    function adicionarFilho() {
        vm.informacao.filhos.unshift({
            nome: '',
            descricao: ''
        });
    }
}

