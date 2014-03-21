'use strict';

/* Controllers */

var app = angular.module('marvelApp');
app.controller('MyController', ["$scope", "Comic", function($scope, Comic) {
  
  $scope.list = [];

  Comic.query().then(function (value) {
    $scope.$apply(function() {
        $scope.list = value.data.results;     

    });
  });
}]);