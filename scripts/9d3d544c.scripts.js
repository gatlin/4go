"use strict";function install(){window.navigator.mozApps.install("http://niltag.net/4go/manifest.webapp")}angular.module("car4goingApp",["ngCookies","ngResource","ngSanitize","ngRoute","leaflet-directive","geolocation"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("car4goingApp").controller("MainCtrl",["$scope","geolocation","$http","$window",function(a,b,c){angular.extend(a,{defaults:{scrollWheelZoom:!1},center:{lat:40.095,lng:-3.823,zoom:4}}),a.locateme=function(){b.getLocation().then(function(b){a.center={lat:b.coords.latitude,lng:b.coords.longitude,zoom:15}})},a.locateme(),a.searchResults=[],a.search=function(){var b=a.searchQuery;c({method:"JSONP",url:"http://nominatim.openstreetmap.org/search/"+b+"?format=json&json_callback=JSON_CALLBACK"}).success(function(b){a.searchResults=b})},a.mapGo=function(b){a.center={lat:parseFloat(b.lat),lng:parseFloat(b.lon),zoom:15},$("#searchModal").modal("hide"),console.log(a.center)}}]);