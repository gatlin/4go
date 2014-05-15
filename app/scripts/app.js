'use strict';

angular
  .module('car4goingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'leaflet-directive',
    'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
