angular.module('app.modules')
    .controller('relatorioPesquisaSatisfacaoCtrl', relatorioPesquisaSatisfacaoCtrl);

function relatorioPesquisaSatisfacaoCtrl($stateParams, $rootScope, $templateCache, HelperService, $modal, pesquisa, RelatorioService) {
    // variáveis
    var vm = this;
    vm.id_evento = $stateParams.id;
    $rootScope.mostrarUsuario = false;

    // definição
    vm.fechaModal = fechaModal;
    vm.buscar = buscar;
    vm.imprimir = imprimir;
    vm.mostrarUsuariosVotaram = mostrarUsuariosVotaram;

    // implementação
    buscar();

    function buscar() {
        RelatorioService.getRelatorioPesquisa(vm.id_evento, function (res) {
            RelatorioService.getQtdUsuariosAcessaram($stateParams.id, function (response) {
                if (response.data && response.data.success) {
                    console.log(res.data);
                    vm.pesquisas = res.data.pesquisas;
                    agruparPesquisas(vm.pesquisas);
                    vm.qtdUsuariosAcessaram = response.data.qtd;
                } else {
                    console.error(response);
                }
            }, function (err) {
                console.log("getQtdUsuariosAcessaram", err);
            });
        }, function (err) {
            console.log("getRelatorioPesquisa", err);
        });
    }

    function agruparPesquisas(pesquisas) {
        var perguntas = {};
        for (var i = 0, len = pesquisas.length; i < len; i++) {
            var pesquisa = pesquisas[i];
            if (pesquisa.TIPO_RESPOSTA === "OPTATIVA") {
                if (typeof perguntas[pesquisa.idPergunta] === "undefined") {
                    perguntas[pesquisa.idPergunta] = {};
                }
                if (typeof perguntas[pesquisa.idPergunta][pesquisa.RESPOSTA] === "undefined") {
                    perguntas[pesquisa.idPergunta][pesquisa.RESPOSTA] = [];
                }
                if (pesquisa.EMAIL_USUARIO) {
                    perguntas[pesquisa.idPergunta][pesquisa.RESPOSTA].push(pesquisa);
                }
            }
        }

        console.log("perguntas: ", perguntas);
        vm.pesquisas = perguntas;

        var indexPerguntas = {};
        var indexRespostas = {};
        var listaPerguntas = [];
        var usuariosUnicos = [];
        var contagem = 0;
        for (var i = 0, len = pesquisas.length; i < len; i++) {
            var pesquisa = pesquisas[i];
            if (pesquisa.NOME_USUARIO && usuariosUnicos.indexOf(pesquisa.NOME_USUARIO) === -1) {
                contagem += 1;
                usuariosUnicos.push(pesquisa.NOME_USUARIO);
            }

            if (pesquisa.TIPO_RESPOSTA === "OPTATIVA") {
                if (typeof indexPerguntas[pesquisa.idPergunta] === "undefined") {
                    indexPerguntas[pesquisa.idPergunta] = listaPerguntas.length;
                    listaPerguntas.push({ id: pesquisa.idPergunta, texto: pesquisa.PERGUNTA, tipo: pesquisa.TIPO_RESPOSTA, respostas: [] });
                }
                var indexPergunta = indexPerguntas[pesquisa.idPergunta];
                if (typeof indexRespostas[pesquisa.idResposta] === "undefined") {
                    indexRespostas[pesquisa.idResposta] = listaPerguntas[indexPergunta].respostas.length;
                    listaPerguntas[indexPergunta].respostas.push({ id: pesquisa.idResposta, texto: pesquisa.RESPOSTA, usuarios: [] });
                }
                var indexResposta = indexRespostas[pesquisa.idResposta];
                if (pesquisa.EMAIL_USUARIO) {
                    listaPerguntas[indexPergunta].respostas[indexResposta].usuarios.push({ nome: pesquisa.NOME_USUARIO, email: pesquisa.EMAIL_USUARIO, telefone: pesquisa.TELEFONE_USUARIO });
                }
            }
            else {
                if (typeof indexPerguntas[pesquisa.idPergunta] === "undefined") {
                    indexPerguntas[pesquisa.idPergunta] = listaPerguntas.length;
                    listaPerguntas.push({ id: pesquisa.idPergunta, texto: pesquisa.PERGUNTA, tipo: pesquisa.TIPO_RESPOSTA, respostas: [] });
                }
                var indexPergunta = indexPerguntas[pesquisa.idPergunta];
                indexRespostas[pesquisa.idResposta] = listaPerguntas[indexPergunta].respostas.length;
                listaPerguntas[indexPergunta].respostas.push({ id: pesquisa.idResposta, texto: pesquisa.RESPOSTA, nomeUsuario: pesquisa.NOME_USUARIO, emailUsuario: pesquisa.EMAIL_USUARIO, telefone: pesquisa.TELEFONE_USUARIO });

            }
        }

        vm.totalUsuariosPesquisa = contagem;

        console.log("listaPerguntas: ", listaPerguntas);
        vm.listaPerguntas = listaPerguntas;
        console.log("pesquisas.length: ", pesquisas.length);
        console.log("contagem: ", vm.totalUsuariosPesquisa);
    }

    function imprimir() {
        // var divToPrint = document.getElementById('printPesquisa');
        // var popupWin = window.open('', '_blank', 'width=800,height=500');
        // popupWin.document.open();
        // popupWin.document.write('<html><style>body{ font-family: Arial, Helvetica, Sans Serif;}table {border-collapse: collapse;width: 100%;}table td, table th {border: 1px solid #00b843;padding: .2em .4em;}table tr:first-child th {border-top: 0;}table tr:last-child td {border-bottom: 0;}table tr td:first-child,table tr th:first-child {border-left: 0;}table tr td:last-child,table tr th:last-child {border-right: 0;}</style><body onload="window.print()">' + divToPrint.innerHTML + '</html>');
        // popupWin.document.close();
        window.print();
    }


    function fechaModal() {
        $modal.hide();
    }

    function mostrarUsuariosVotaram(resposta) {
        $rootScope.mostrarUsuario = true;
        var modalUsuario = $modal({
            template: $templateCache.get('eventos/relatorio/relatorio-pesquisa-satisfacao-usuarios.modal.html'),
            controller: relatorioPesquisaSatisfacaoUsuariosCtrl,
            controllerAs: 'vm',
            locals: {
                resposta: resposta
            },
            onShow: function () {
                console.log('HUHUHSUAHSUDHADSSD');
            }
        });
    }
}