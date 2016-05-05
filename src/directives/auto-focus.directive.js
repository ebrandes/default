angular
.module('app.directives')
.directive('autoFocus', autoFocus);

function autoFocus($timeout) {
    return {
        restrict: 'AC',
        link: function(scope, element) {
            $timeout(function(){
                element[0].focus();
            });
        }
    };
};
