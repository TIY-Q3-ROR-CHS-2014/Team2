angular.module("cdpApp")
  .controller('userCtrl', function ($route, $rootScope, $scope, $log, userSvc) {
    userSvc.getStudents().success(function(students){
      $scope.students = students;
    });

  });
