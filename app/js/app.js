'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('marvelApp', ['ngRoute', "ngResource"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
/*

var volley = angular.module('volley');

volley.service('sessionsService', ['$resource', '$q', '$route', function($resource, $q, $route) {

  var allowAccess = $resource('/api/sessions/:sessionId/allowAccess', {}, { execute: { method:'GET' } });
  var addToWhiteList = $resource('/api/sessions/:sessionId/whiteList', { sessionId:'@id' }, { execute: { method:'PUT' } });
  var archive = $resource('/api/sessions/:sessionId/archive', { sessionId: '@id'}, { execute: {method: 'PUT'}});
  var addAttachments =  $resource('/api/sessions/:sessionId/attachments', { sessionId:'@id' }, { execute: { method:'PUT' } });
  var Sessions = $resource('/api/sessions');

  return {
    
    accessDelimitation: function(archived) {
      var defer = $q.defer();

      allowAccess.execute({sessionId: $route.current.params.sessionId, archived: archived},
        function success() {
          defer.resolve();
        }, function error() {
          defer.reject("Access Denied");
        }
      );

      return defer.promise;
    },

    addToWhiteList: function(id, invites, uninvites, success, error) {
      addToWhiteList.execute({ id: id, invites: invites, uninvites: uninvites }, success, error);
    },

    create: function(session, success, error) {
      var s = new Sessions(session);
      s.$save(success, error);
    },

    archiveSession: function(sessionId, success, error) {
      archive.execute({ id: sessionId }, success, error);
    },

    addAttachments: function(params, success, error) {
      addAttachments.execute(params, success, error);
    }

  };

}]);

volley.service('usersService', ['$resource', function($resource) {

  var uploadAvatar = $resource('/api/users/avatar', {}, { execute: { method:'PUT' } });

  return {
    
    uploadAvatar: function(avatarUrl, success, error) {
      uploadAvatar.execute({ avatar: avatarUrl }, success, error);
    }

  };

}]);


volley.service('feedbackService', ['$resource', function($resource) {

  var Feedback = $resource('/api/feedback');

  return {
    
    create: function(feedback, success, error) {
      var f = new Feedback(feedback);
      f.$save(success, error);
    }

  };

}]);

volley.service('acquaintancesService', ['$resource', function($resource) {

  var Acquaintances = $resource('/api/users/acquaintances');

  return {
    
    query: function(query, success, error) {
      Acquaintances.query(query, success, error);
    }

  };

}]);*/