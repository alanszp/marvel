/*global angular, ngResource*/
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var marvelServices = angular.module('marvelApp.services', ["ngResource"]);


marvelServices.factory('Comic', ['$resource',
  function($resource){
	var route = "http://gateway.marvel.com/v1/public/comics";
	var params = "?apikey=7d71d8709c298336f559d4acd2e61570&ts=1&hash=16d6f37c9bb162000721b8717503df61";
    return $resource(route + params + "&limit=:limit", {limit:15}, {
      query: {method:'GET', params:{}}
    });
  }]);