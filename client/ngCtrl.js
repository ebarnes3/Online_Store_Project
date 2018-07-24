app.controller("ngCtrl", mainController);


mainController.$inject = ["$scope", "$http","$location"];


function mainController($scope, $http, $location) {

    $http.get("http://localhost:3000/api/getChairs").then(function(data) {
        console.log(data.data);
        $scope.chairs = data.data;
    });

    $http.get("http://localhost:3000/api/getElectronics").then(function(data) {
        console.log(data.data);
        $scope.electronics = data.data;
    });
    user = {
             "id": "",
             "username" : "hey",
             "password":""
         }

    $scope.insertUsers = (user) => {

      $http.post("http://localhost:3000/api/insertUsers",  user).then(function(data){
        console.log(data);
        alert('Registration Completed!')
      });
    }



    $scope.login = {
      'username' : '',
      'password' : ''
    };

    $scope.confirmLogin = () => {
      //alert($scope.login.username);
      $http.get("http://localhost:3000/api/getUsers",  user).then(function(data){
        $scope.users = data.data;
        for(x in $scope.users){
          if($scope.users[x].username == $scope.login.username) {
            if($scope.users[x].password == $scope.login.password){
              // change view to home page
              $location.path('home');
            }
            else {
              alert('Password is incorrect');
            }
          }
          else {
            alert('Username does not exist');
          }
        }
      });
    }

};
