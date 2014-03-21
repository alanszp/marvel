'use strict';

/* Controllers */

var controllers = angular.module('marvelApp.controllers', ["marvelApp.services"]);
  controllers.controller('MyCtrl1', ["$scope", "Comic", function($scope, Comic) {
	var response = Comic.query(); 
	$scope.comics = response.data.results;
  }]);

  controllers.controller('MyCtrl2', [function() {

  }]);