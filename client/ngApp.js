var app = angular.module("ngApp", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider) {
  $routeProvider
   .when("/", {
     templateUrl : "landing.html"
   })
   .when("/register", {
     templateUrl : "register.html"
   })
   .when("/home", {
     templateUrl : "home.html"
   });
});
