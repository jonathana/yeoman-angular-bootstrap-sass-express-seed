/* global jQuery: false */
/* jshint unused: false */
require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrap: 'vendor/bootstrap',
    angular: '../components/angular/angular',
    spin: '../components/spin.js/spin',
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
    }
  }
});

require(['domReady', 'jquery', 'bootstrap', 'spin', 'angular', 'app'], function (domReady, $, bootstrap, Spinner, angular, app) {
  'use strict';
  domReady(function(){
    angular.element(document).ready(function leadFireAngular() {
      angular.bootstrap(document, ['csgApp']);
    });
  });
});