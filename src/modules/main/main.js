angular.module('app.modules')
    .controller('mainCtrl', mainCtrl);

function mainCtrl($rootScope, $templateCache, $modal, $timeout, Upload, HelperService) {
    //variables
    $rootScope.loader = false;
    //functions
    this.abrirModal = abrirModal;
    this.showAlert = showAlert;
    this.abrirModalCadastro = abrirModalCadastro;
    this.uploadFiles = uploadFiles;

    function abrirModal() {
        HelperService.openModalConfirmation({
            title: "Noix",
            content: "Sera que é noix?",
            showCancel: false,
            confirmFunction: function() {
                this.resposta = 'Confirmado';
            },
            cancelFunction: function() {
                this.resposta = 'Cancelado.';
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
        this.salvar = function() {
            myModal.$promise.then(myModal.hide);
        }

        this.cancelar = function() {
            HelperService.openModalConfirmation({
                title: "Noix",
                content: "Sera que é noix?",
                confirmFunction: function() {
                    this.resposta = 'Sim.';
                    myModal.$promise.then(myModal.hide);
                },
                cancelFunction: function() {
                    this.resposta = 'Não.';
                }
            });
        }

        var myModal = $modal({
            title: 'My Title',
            scope: this,
            template: $templateCache.get('main/modal.main.html'),
            show: true,
            controllerAs: 'mdlCadastro'
        });
    }

    function uploadFiles(files, errFiles) {
        this.files = files;
        this.errFiles = errFiles;
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
                    this.errorMsg = response.status + ': ' + response.data;
            }, function(evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                    evt.loaded / evt.total));
            });
        });
    }

};
