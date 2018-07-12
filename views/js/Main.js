var app = angular.module("myApp", []); 

app.controller("myCtrl", function($scope) {

    $scope.showSignUp = function() {
      let signUpDiv = document.getElementById("loginModal");
      signUpDiv.style.display = "block";
   };

});
