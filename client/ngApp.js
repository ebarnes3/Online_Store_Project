var app = angular.module("ngApp", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider) {
  $routeProvider
   .when("/", {
     templateUrl : "landing.html"
   })
   .when("/about", {
     templateUrl : "about.html"
   })
   .when("/account", {
     templateUrl : "account.html"
   })
   .when("/cart", {
     templateUrl : "cart.html"
   })
   .when("/home", {
     templateUrl : "home.html"
   });
});
