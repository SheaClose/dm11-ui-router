angular.module("app").service("homeService", function($http) {
  this.getPeople = function() {
    return $http.get("https://swapi.co/api/people").then(res => {
      this.people = res.data.results;
      return this.people;
    });
  };
});
