/* global angular: false */
/* global define: false */
/* global jQuery: false */
/* jshint unused: false */
'use strict';

define(['angular', 'jquery', 'spin'], function (angular, $, Spinner) {
  (function($) {
    $.fn.spin = function(opts, color) {
      var presets = {
        'tiny': { lines: 8, length: 2, width: 2, radius: 3 },
        'small': { lines: 8, length: 4, width: 3, radius: 5 },
        'large': { lines: 10, length: 8, width: 4, radius: 8 }
      };
      if (Spinner) {
        return this.each(function() {
          var $this = $(this),
            data = $this.data();

          if (data.spinner) {
            data.spinner.stop();
            delete data.spinner;
          }
          if (opts !== false) {
            if (typeof opts === 'string') {
              if (opts in presets) {
                opts = presets[opts];
              } else {
                opts = {};
              }
              if (color) {
                opts.color = color;
              }
            }
            data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
          }
        });
      } else {
        throw 'Spinner class not available.';
      }
    };
  })(jQuery);

  var angApp = angular.module('csgApp', [], function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateUrl: '/views/main.html',
      controller: MainCntl
    });

    $routeProvider.otherwise({redirectTo: '/'});
  });


  var MainCntl = function($scope, $http){
    $scope.model = {'message': 'Waiting for server message'};
    var spinHolder = $('#spinHolder');
    spinHolder.spin();
    $http.get('/api/ping').success(function(data,status){
      $scope.model.message = data.message;
      spinHolder.spin(false);
    }).error(function(data,status){
      spinHolder.spin(false);
    });
  };

  MainCntl.$inject = ['$scope', '$http'];

  var LoginCntl = function($scope, $http){

  };

  LoginCntl.$inject = ['$scope', '$http'];
  angApp.controller('LoginCntl', LoginCntl);

  return angApp;
});
