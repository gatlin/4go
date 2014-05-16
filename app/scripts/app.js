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
  })

  .directive('resizable', function($window) {
      return function($scope) {
          $scope.initializeWindowSize = function() {
              $scope.windowHeight = $window.innerHeight;
              return $scope.windowWidth = $window.innerWidth;
          };
          $scope.initializeWindowSize();
          return angular.element($window).bind('resize', function() {
              $scope.initializeWindowSize();
              return $scope.$apply();
          });
      };
  });
