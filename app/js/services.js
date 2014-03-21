/*global angular, ngResource*/
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('marvelApp');

app.service('Comic', ['$resource', function($resource){
    var route = "http://gateway.marvel.com/v1/public/creators";
    var params = "?apikey=7d71d8709c298336f559d4acd2e61570&ts=1&hash=16d6f37c9bb162000721b8717503df61";

    var r = route + params;
    return {
        query: function() {
            var deferred = Q.defer();

            $resource(route + params, {}, {request: {method: "JSONP"}}).request({limit:15}
            , function(data) {
                deferred.resolve(data);
            }, function(reason){
           
                deferred.reject(reason);
            });

            return deferred.promise;
        }
    };
    


}]); 