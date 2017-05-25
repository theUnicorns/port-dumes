/**
 * Created by beebe on 5/24/2017.
 */
angular.module(`port-dumes`, [`ui.router`,`ngYoutubeEmbed`]).config(($urlRouterProvider,$stateProvider) => {
    $urlRouterProvider.when(``, `/`);

    $stateProvider
        .state(`home`, {
            templateUrl: `homeView/home.html`,
            url: `/`,
            controller: `homeCtrl`
        })
});