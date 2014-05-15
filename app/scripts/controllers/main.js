'use strict';

angular.module('car4goingApp')
  .controller('MainCtrl', function ($scope, geolocation) {
      angular.extend($scope, {
          defaults: {
              scrollWheelZoom: false
          },
          center: {
              lat: 40.095,
              lng: -3.823,
              zoom: 4
          }
      });
      $scope.locateme = function() {
          geolocation.getLocation().then(function(data) {
              $scope.center = { lat: data.coords.latitude,
                                lng: data.coords.longitude,
                                zoom: 15 };
          });
      };

      $scope.locateme();
  });
