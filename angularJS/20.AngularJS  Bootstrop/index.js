angular.module('myApp', []).controller('userCtrl', function($scope) {
    $scope.fName = '';//模型变量 (用户名)
    $scope.lName = '';//模型变量 (用户姓)
    $scope.passw1 = '';//模型变量 (用户密码 1)
    $scope.passw2 = '';//模型变量 (用户密码 2)
    $scope.users = [//模型变量 (用户的数组)
        {id:1, fName:'Hege', lName:"Pege"},
        {id:2, fName:'Kim',  lName:"Pim" },
        {id:3, fName:'Sal',  lName:"Smith" },
        {id:4, fName:'Jack', lName:"Jones" },
        {id:5, fName:'John', lName:"Doe" },
        {id:6, fName:'Peter',lName:"Pan" }
    ];
    $scope.edit = true;//当用户点击创建用户时设置为true。
    $scope.error = false;//如果 passw1 不等于 passw2 设置为 true
    $scope.incomplete = false;//如果每个字段都为空(length = 0)设置为 true

    $scope.editUser = function(id) {//设置模型变量
        if (id == 'new') {
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
        } else {
            $scope.edit = false;
            $scope.fName = $scope.users[id-1].fName;
            $scope.lName = $scope.users[id-1].lName;
        }
    };

    $scope.$watch('passw1',function() {$scope.test();});//监控模型变量
    $scope.$watch('passw2',function() {$scope.test();});
    $scope.$watch('fName', function() {$scope.test();});
    $scope.$watch('lName', function() {$scope.test();});

    $scope.test = function() {//验证模型变量的错误和完整性
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
            !$scope.lName.length ||
            !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };

});