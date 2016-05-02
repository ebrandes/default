angular.module('app.directives')
    .directive('globalLoader', function($rootScope, $timeout) {
        return {
            scope: {
                loader: '='
            },
            link: function(scope, element, attrs) {
                scope.$watch('loader', function(newValue, oldValue) {
                    scope.loader = newValue;
                    $setTimeout(function() {
                        scope.loader = false;
                    }, 10000);
                });
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
