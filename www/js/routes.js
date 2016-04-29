angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('menu.projects', {
    url: '/projects',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projects.html',
        controller: 'projectsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.projectDetails', {
    url: '/project_detail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projectDetails.html',
        controller: 'projectDetailsCtrl'
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

  .state('menu.documentCategories', {
    url: '/document_categories',
    views: {
      'side-menu21': {
        templateUrl: 'templates/documentCategories.html',
        controller: 'documentCategoriesCtrl'
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

  .state('menu.documentDetails', {
    url: '/document_detail',
    params:{
      "photos":""
    },
    views: {
      'side-menu21': {
        templateUrl: 'templates/documentDetails.html',
        controller: 'documentDetailsCtrl'
      }
    }
  })

  .state('logIn', {
    url: '/login',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

  .state('drive', {
    url: '/drive',
    templateUrl: 'templates/drive.html',
    controller: 'DriveCtrl'
  })

  .state('menu.notification', {
    url: '/notification',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bal_assistant/notification.html',
        controller: 'NotificationCtrl'
      }
    }
  })
  .state('menu.bal_projects', {
    url: '/bal_projects',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bal_assistant/bal_projects.html',
        controller: 'balprojectsCtrl'
      }
    }
  })
  .state('menu.bal_project_details', {
    url: '/bal_project_details',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bal_assistant/bal_project_details.html',
        controller: 'balprojectdetailsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')



});
