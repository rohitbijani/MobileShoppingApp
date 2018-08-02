var myApp=angular.module('myApp',['ui.router','ngMaterial','underscore']);

myApp.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/login')
  $stateProvider
      .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    })
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html'
    })
    .state('cart',{
      url: '/cart',
      templateUrl: 'templates/cart.html',
      controller: 'homeController'
    });
});
