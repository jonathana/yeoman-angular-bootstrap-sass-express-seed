/* global angular: false */
/* global define: false */
/* global jQuery: false */
/* jshint unused: false */
'use strict';

define(['angular', 'angularResource', 'angularRoute'], function (angular, angularResource, angularRoute){

  var angApp = angular.module('csgApp', ['ngResource', 'ngRoute', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateUrl: '/views/main.html',
      controller: MainCntl
    });

    $routeProvider.otherwise({redirectTo: '/'});
  }]);


  var MainCntl = function($scope, $http){
    $scope.model = {'message': 'Waiting for server message'};
    $http.get('/api/ping').success(function(data,status){
      $scope.model.message = data.message;
    }).error(function(data,status){
    });
  };

  MainCntl.$inject = ['$scope', '$http'];

  var LoginCntl = function($scope, $http){

  };

  LoginCntl.$inject = ['$scope', '$http'];
  angApp.controller('LoginCntl', LoginCntl);

  return angApp;
});
