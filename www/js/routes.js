angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('menu.myCases', {
    url: '/projects',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myCases.html',
        controller: 'myCasesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.h1B', {
    url: '/project_detail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/h1B.html',
        controller: 'h1BCtrl'
      }
    }
  })

  .state('menu.documents', {
    url: '/documents',
    views: {
      'side-menu21': {
        templateUrl: 'templates/documents.html',
        controller: 'documentsCtrl'
      }
    }
  })

  .state('menu.diplomas', {
    url: '/document_category',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diplomas.html',
        controller: 'diplomasCtrl'
      }
    }
  })

  .state('menu.status', {
    url: '/status',
    views: {
      'side-menu21': {
        templateUrl: 'templates/status.html',
        controller: 'statusCtrl'
      }
    }
  })

  .state('menu.details', {
    url: '/document_detail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      }
    }
  })

  .state('logIn', {
    url: '/login',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/projects')



});
