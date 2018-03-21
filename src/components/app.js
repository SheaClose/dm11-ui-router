angular
  .module("app", ["ui.router"])
  .config(function(homeService, $urlRouterProvider, $stateProvider) {
    homeService.getPeople();
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./components/home/home.html",
        controller: "homeCtrl"
      })
      .state("about", {
        url: "/about",
        template: "<h1> ABOUT!</h1>"
      })
      .state("details", {
        url: "/details/:name",
        templateUrl: "./components/details/details.html",
        controller: "detailsCtrl"
      });
  });
