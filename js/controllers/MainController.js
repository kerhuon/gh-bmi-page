app.controller("BMICtrl", function($scope){
    
    $scope.poids = 70;
    $scope.taille = 175;
    $scope.imc=function(){
            return $scope.poids*10000/$scope.taille/$scope.taille;
    };
    
    
    $scope.profil=function(){
        var truc="";
        if ($scope.imc()<16.5){truc="Dénutrition ou famine";$scope.myVar="class-red-plus"}
        else if($scope.imc()<=18.5){truc="Maigreur";$scope.myVar="class-orange"} 
        else if($scope.imc()<=25){truc="Corpulence normale";$scope.myVar="class-green"}
        else if($scope.imc()<=30){truc="Surpoids";$scope.myVar="class-orange"}
        else if($scope.imc()<=35){truc="Obésité modérée";$scope.myVar="class-red"}
        else if($scope.imc()<=40){truc="Obésité sévère";$scope.myVar="class-red-plus"}
        else {truc="Obésité morbide ou massive";$scope.myVar="class-red-plus"}
        return truc;
    };

    $scope.poidsCalcule=function(imcParam){
        return imcParam/10000*$scope.taille*$scope.taille;
    };
    
    //$scope.$watch($scope.imc, calculeProfil);
});