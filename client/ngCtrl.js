app.controller("ngCtrl", mainController);


mainController.$inject = ["$scope", "$http","$location", "$route"];


function mainController($scope, $http, $location, $route) {

    $http.get("http://localhost:3000/api/getChairs").then(function(data) {
        console.log(data.data);
        $scope.chairs = data.data;
    });

    $http.get("http://localhost:3000/api/getElectronics").then(function(data) {
        console.log(data.data);
        $scope.electronics = data.data;
    });

    // Add user..................................
    $scope.user = {
      'username' : '',
      'password' : ''
    }

    $scope.insertUsers = () => {
      //console.log($scope.user);
      $http.post("http://localhost:3000/api/insertUsers", $scope.user).then(function(data){
          console.log(data.data);
      });
      $('#signUpModal').modal('hide');
      //$location.path('home');
    }
    //...............................



    // Login authentication...............................................
    $scope.login = {
      'username' : '',
      'password' : ''
    };

    $scope.confirmLogin = () => {
      //alert($scope.login.username);
      $http.get("http://localhost:3000/api/getUsers").then(function(data){

        $scope.users = data.data;
        var i = 0;
        for(x in $scope.users){
          if($scope.users[x].username == $scope.login.username) {
            i=1;
            if($scope.users[x].password == $scope.login.password){
              $location.path('home');
              break;
            }
            else {
              alert('Password is incorrect');
              break;
            }
          }
        }
        if(i==0){
          alert('username does not exist');
        }
      });
    }
    //....................................
};
