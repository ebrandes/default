angular.module('app.directives')
    .directive('globalLoader', function() {
        return {
            scope: {
                loader: '='
            },
            link: function(scope, element, attrs) {
                scope.$watch('loader', function(newValue, oldValue) {
                    scope.loader = newValue;
                });
                scope.$watch('textLoader', function(newValue, oldValue) {
                    scope.textLoader = newValue;
                })
            },
            template: '<div ng-show="loader" class="loader-background"> ' +
                '<div class="loader-box">' +
                '<div class="loader-icon">' +
                '<img src="./assets/imgs/loader.gif" alt="Loading...">' +
                '</div>' +
                '</div>' +
                '</div>'
        };
    });
