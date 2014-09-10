var gulpAngularSkeleton = angular.module("gulpAngularSkeleton", ["ngRoute", "ngAnimate"])
  .config(["$routeProvider", function ($routeProvider) {
    "use strict";
    $routeProvider
      .when("/", {
        templateUrl: "./partials/test1.html",
        controller:"TestCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
}]);