angular.module('app.modules')
    .controller('menuCtrl', menuCtrl);


function menuCtrl($templateCache, $aside, SessionService) {
    //variables
    this.usuario = SessionService.getSession();
    //functions
    this.openMenu = openMenu;
    function openMenu() {
        $aside({
            title: "Menu"
        });
    }
}
