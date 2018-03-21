angular
  .module("app")
  .controller("detailsCtrl", function($scope, $stateParams, homeService) {
    let { name } = $stateParams;
    let { people } = homeService;
    $scope.person = people.find(person => person.name === name);
    console.log($scope.person);
  });
