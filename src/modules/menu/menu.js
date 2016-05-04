angular.module('app.modules')
    .controller('menuCtrl', menuCtrl);


function menuCtrl($templateCache, $aside) {
    //variables

    //functions
    this.openMenu = openMenu;

    function openMenu() {
        $aside({
            template: '<div class="aside-dialog"> ' +
                '<div class="aside-content"> ' +
                '<h2>NOIX</h2>'+
                '</div> ' +
                '</div> ',
            show: true,
            title: "Menu"
        });
    }
}
