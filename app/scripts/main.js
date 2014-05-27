/* global jQuery: false */
/* jshint unused: false */
require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrap: 'vendor/bootstrap',
    angular: '../components/angular/angular',
    angularResource: '../components/angular-resource/angular-resource',
    angularRoute: '../components/angular-route/angular-route',
    domReady: '../components/requirejs-domready/domReady'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularResource: {
      deps: ['angular'],
      exports: 'angularResource'
    },
    angularRoute: {
      deps: ['angular'],
      exports: 'angularRoute'
    }
  }
});

require([
  'domReady',
  'jquery',
  'bootstrap',
  'angular',
  'angularResource',
  'angularRoute',
  'app'
], function (domReady, $, bootstrap, angular) {
  'use strict';
  domReady(function(){
    angular.element(document).ready(function leadFireAngular() {
      angular.bootstrap(document, ['csgApp']);
    });
  });
});