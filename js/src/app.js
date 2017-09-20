'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    localStorage.setItem("index", "0");
    $routeProvider
      .when('/', {
        controller: 'mainController',
        templateUrl: 'views/home.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
