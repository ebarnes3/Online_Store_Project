app.controller("ngCtrl", mainController);


mainController.$inject = ["$scope", "$http"];


function mainController($scope, $http) {

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
             "username" : "",
             "password":""
         }

    $scope.insertUsers= function(user){
        console.log('user');
        $http.post("http://localhost:3000/api/updateUsers",  home).then(function(data){
            console.log(data);
        });
}
};
