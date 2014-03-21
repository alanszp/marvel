'use strict';

/* Controllers */

var app = angular.module('marvelApp');
app.controller('MyController', ["$scope", "Comic", function($scope, Comic) {
   function a(val){
     $scope.asd = val;
   };
   a("hols");
  Comic.query().then(function (value) {
	a(value.status);
  },
  function (value) {
  	console.log("error");
	a(value.status);
  });
}]);