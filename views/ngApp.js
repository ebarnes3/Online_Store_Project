var app = angular.module("ngApp", ["ngRoute"]);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when("/", {
     templateUrl : "landing.html"
   })
   .when("/store", {
     templateUrl : "storepage.html"
   });

   $locationProvider.html5Mode(true);
});
