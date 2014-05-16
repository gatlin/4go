'use strict';

angular.module('car4goingApp')
  .controller('MainCtrl', function ($scope, geolocation, $http, $window) {
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

      $scope.searchResults = [];

      $scope.search = function() {
          var q = $scope.searchQuery;
          $http({method: "JSONP", url: 'http://nominatim.openstreetmap.org/search/'+q+'?format=json&json_callback=JSON_CALLBACK'})
              .success(function(data, status, headers, config) {
                  $scope.searchResults = data;
              })
          ;
      };

      $scope.mapGo = function(place) {
          $scope.center = { lat: parseFloat(place.lat),
                            lng: parseFloat(place.lon),
                            zoom: 15
          };
          $('#searchModal').modal('hide');
          console.log($scope.center);
      };

  });

  function install() {
      var request = window.navigator.mozApps.install("http://niltag.net/4go/manifest.webapp");
  };
