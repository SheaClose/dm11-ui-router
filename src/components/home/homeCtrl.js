angular
  .module("app")
  .controller("homeCtrl", function($scope, homeService, $state) {
    homeService.getPeople().then(res => {
      $scope.people = res;
    });
    $scope.goTo = function(name) {
      $state.go("details", { name: name });
    };
  });
