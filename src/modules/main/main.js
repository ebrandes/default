angular.module('app.modules')
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $templateCache, $modal, $rootScope, $timeout, Upload, HelperService) {
    var vm = this;
    $rootScope.loader = false;

    $scope.abrirModal = abrirModal;
    $scope.showAlert = showAlert;
    $scope.abrirModalCadastro = abrirModalCadastro;
    $scope.uploadFiles = uploadFiles;

    function abrirModal() {
        HelperService.openModalConfirmation({
            title: "Noix",
            content: "Sera que é noix?",
            showCancel: false,
            confirmFunction: function() {
                $scope.resposta = 'Confirmado';
            },
            cancelFunction: function() {
                $scope.resposta = 'Cancelado.';
            }
        });
    }

    function showAlert() {
        HelperService.showAlert({
            type: 'danger',
            content: 'Aqui vai uma mensagem de informação.'
        });
    }

    function abrirModalCadastro() {
        $scope.salvar = function() {
            myModal.$promise.then(myModal.hide);
        }

        $scope.cancelar = function() {
            HelperService.openModalConfirmation({
                title: "Noix",
                content: "Sera que é noix?",
                confirmFunction: function() {
                    $scope.resposta = 'Sim.';
                    myModal.$promise.then(myModal.hide);
                },
                cancelFunction: function() {
                    $scope.resposta = 'Não.';
                }
            });
        }

        var myModal = $modal({
            title: 'My Title',
            scope: $scope,
            template: $templateCache.get('main/modal.main.html'),
            show: true
        });
    }

    function uploadFiles(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                //demo url works
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                    file: file
                }
            });

            file.upload.then(function(response) {
                $timeout(function() {
                    file.result = response.data;
                });
            }, function(response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function(evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                    evt.loaded / evt.total));
            });
        });
    }

};
