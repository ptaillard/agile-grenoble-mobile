// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.accueil', {
      url: "/accueil",
      views: {
        'menuContent' :{
          templateUrl: "templates/accueil.html"
        }
      }
    })

    .state('app.acces', {
      url: "/acces",
      views: {
        'menuContent' :{
          templateUrl: "templates/acces.html",
          controller: 'AccesCtrl'
        }
      }
    })

    .state('app.parcours', {
      url: "/parcours",
      views: {
        'menuContent' :{
          templateUrl: "templates/parcours.html"
        }
      }
    })

    .state('app.detailparcours', {
      url: "/parcours/:type",
      views: {
        'menuContent' :{
          templateUrl: "templates/detailParcours.html",
          controller: 'DetailParcoursCtrl'
        }
      }
    })

    
    .state('app.sponsors', {
      url: "/sponsors",
      views: {
        'menuContent' :{
          templateUrl: "templates/sponsors.html",
          controller: 'SponsorsCtrl'
        }
      }
    })

    .state('app.sponsor', {
      url: "/sponsor/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/detailSponsor.html",
          controller: 'DetailSponsorCtrl'
        }
      }
    })

    .state('app.keynotes', {
      url: "/keynotes",
      views: {
        'menuContent' :{
          templateUrl: "templates/keynotes.html",
          controller: 'KeynotesCtrl'
        }
      }
    })

    .state('app.apropos', {
      url: "/apropos",
      views: {
        'menuContent' :{
          templateUrl: "templates/apropos.html",
          controller: 'AproposCtrl'
        }
      }
    })

    .state('app.programme', {
      url: "/programme",
      views: {
        'menuContent' :{
          templateUrl: "templates/programme.html",
          controller: 'ProgrammePrincipalCtrl'
        }
      }
    })
    .state('app.sessions', {
      url: "/sessions/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/sessions.html",
          controller: 'ProgrammeSessionsCtrl'
        }
      }
    })

    .state('app.session', {
      url: "/session/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/session.html",
          controller: 'ProgrammeSessionCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/programme');
});

