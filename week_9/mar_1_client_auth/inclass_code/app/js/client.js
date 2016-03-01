const angular = require('angular');
require('angular-route');
const bearsApp = angular.module('bearsApp', ['ngRoute']);

require('./services')(bearsApp);

require('./bears')(bearsApp);
require('./auth')(bearsApp);

bearsApp.config(['$routeProvider', function(routes) {
  routes
    .when('/home', {
      controller: 'BearsController',
      templateUrl: '/views/bears_view.html'
    })
    .when('/', {
      redirectTo: '/home'
    })
    .when('/signup', {
      controller: 'SignupController',
      templateUrl: '/views/sign_up_in_view.html' 
    })
    .when('/signin', {
      controller: 'SigninController',
      templateUrl: '/views/sign_up_in_view.html' 
    })
    .otherwise({
      templateUrl: '/views/four_oh_four.html'
    });
}]);
