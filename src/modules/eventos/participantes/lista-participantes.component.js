var listaParticipantes = {
    templateUrl: 'eventos/participantes/lista-participantes.html',
    controller: function($scope) {
        var ctrl = this;
        ctrl.item = 'teste';
        ctrl.objectTypes = [
            { name: 'imagem', type: 'image' },
            { name: 'nome', type: 'string' },
            { name: 'email', type: 'string' }
        ];
        ctrl.delete = function() {
            console.log('delete', $scope);
        }
    },
    bindings: {
        participantes: '<'
    }
};
listaParticipantes.controller.$inject = ['$scope'];

var ntcDataTable = {
    templateUrl: 'eventos/participantes/ntc-data-table.html',
    controller: function($scope) {
        var ctrl = this;
        ctrl.dataType = {};
        ctrl.dataType.is = function(type, name) {
            var i, length, dataType, foundDataType;
            for (i = 0, length = ctrl.objectTypes.length; i < length; i++) {
                dataType = ctrl.objectTypes[i];
                if (dataType.name === name) {
                    foundDataType = dataType;
                    break;
                }
            }
            if (!angular.isObject(foundDataType)) {
                return false;
            }
            return (foundDataType.type === type);
        }
    },
    transclude: true,
    bindings: {
        items: '<',
        objectTypes: '<'
    }
};
ntcDataTable.controller.$inject = ['$scope'];

var ntcDataTableButtonDelete = {
    template: '<button class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i><span ng-transclude></span></button>',
    transclude: true,
    require: {
        ntcDataTableItemButtonsCtrl: '^^ntcDataTableItemButtons'
    },
    controller: function() {
        var ctrl = this;
    },
    bindings: {}
}

var ntcDataTableButtonDetails = {
    template: '<button class="btn btn-success"><i class="fa fa-eye" aria-hidden="true"></i><span ng-transclude></span></button>',
    transclude: true,
    require: {
        ntcDataTableItemButtonsCtrl: '^^ntcDataTableItemButtons'
    },
    controller: function() {
        var ctrl = this;
    },
    bindings: {}
}

var ntcDataTableItemButtons = {
    template: '<div class="buttons" ng-transclude></div>',
    transclude: true,
    controller: function() {
        var ctrl = this;
    },
    bindings: {}
}

angular
    .module('app.modules')
    .component('listaParticipantes', listaParticipantes)
    .component('ntcDataTable', ntcDataTable)
    .component('ntcDataTableButtonDelete', ntcDataTableButtonDelete)
    .component('ntcDataTableButtonDetails', ntcDataTableButtonDetails)
    .component('ntcDataTableItemButtons', ntcDataTableItemButtons)

