angular.module('app.controllers', [])

.controller('projectsCtrl', function($scope) {
  $scope.active_projs = [
    {
      title: "H1-B",
      progress: 60,
      type: "Not Visa",
      initiation_date: "9 APR 2016"
    },
    {
      title: "Angola Business Visa",
      progress: 20,
      type: "Visa",
      initiation_date: "31 JAN 2016"
    },
    {
      title: "China Business Visa",
      progress: 80,
      type: "Visa",
      initiation_date: "12 NOV 2015"
    },
    {
      title: "Saudi Arabia Business Visa",
      progress: 75,
      type: "Visa",
      initiation_date: "4 JUL 2015"
    }];
  $scope.inactive_projs = [{
      title: "OPT Stem",
      progress: 100,
      type: "Not Visa",
      initiation_date: "13 MAR 2015"
    },
    {
      title: "Australia Business Visa",
      progress: 100,
      type: "Visa",
      initiation_date: "4 JAN 2015"
    }];
})

.controller('projectDetailsCtrl', function($scope) {

})

.controller('documentsCtrl', function($scope) {
  $scope.documents = [
    {
      title: "Diploma(s)",
      description: "Copies of all degrees, diplomas, and transcripts, if applicable",
      status: "Completed"
    },{
      title: "Passport(s)",
      description: "Copy of passport biographic and signature pages",
      status: "Completed"
    },{
      title: "Resume",
      description: "Copy of up-to-date resume (CV) that includes dates with each employer, each position held, and duties",
      status: "Completed"
    },{
      title: "US Visa(s)",
      description: "Copies of current U.S. visa and of all previous U.S. visas, if applicable",
      status: "Completed"
    },{
      title: "Immigration Paperwork",
      description: "Copies of all previous U.S. immigration paperwork including prior approval notices (Form I-797), Form IAP-66, Form DS-2019, and/or Form(s) I-20, and/or Employment Authorization Card, if applicable",
      status: "Completed"
    }];
})

.controller('documentCategoriesCtrl', function($scope) {

})

.controller('statusCtrl', function($scope) {
  $scope.project_status = [
    {
      title: "Project Initiated",
      update: ["9 APR 2016 - Case initiated. Awaiting return of completed questionnaires.",
      "15 NOV 2015 - Questionnaires and supporting documents received. Awaiting Employment Details from HR."],
      progress: 100,
      status: "Completed"
    },
    {
      title: "Preparing Application",
      update: ["19 NOV 2015 - Preparing H-1B Petition.",
      "20 NOV 2015 - Sent documents to company for signatures."],
      progress: 50,
      status: "In Progress"
    },
    {
      title: "Submit Application to USCIS",
      update: "",
      progress: 0,
      status: "Not Started"
    },
    {
      title: "Application Approved",
      update: "",
      progress: 0,
      status: "Not Started"
    }
  ];

})

.controller('documentDetailsCtrl', function($scope) {

})

.controller('logInCtrl', function($scope) {

})
