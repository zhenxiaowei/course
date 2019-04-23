(function () {
    var app = angular.module('myApp1', []);
    app.factory('myPro',function () {
        var currency='$';
        return {
            '+':(a,b)=>currency + (parseFloat(a)+parseFloat(b)),
            '-':(a,b)=>currency + (parseFloat(a)-parseFloat(b)),
            '*':(a,b)=>currency + (parseFloat(a)*parseFloat(b)),
            '/':(a,b)=>currency + (parseFloat(a)/parseFloat(b)),
        }
    });
    app.controller('myCtrl',function ($scope,myPro) {
        $scope.cal="+";
        $scope.doCal = function () {
            $scope.result = myPro[$scope.cal]($scope.a,$scope.b)
        };
    });

})();
