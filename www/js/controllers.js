angular.module('app.controllers', [])

.controller('projectsCtrl', function($scope) {
  $scope.active_projs = [
    ["H1-B", 60, "The H1B visa is a non-immigrant visa. It is designed to allow U.S. employers to recruit & employ foreign professionals in specialty occupations within the USA for a specified period of time."],
    ["Angola Business Visa", 20, "Angola Business Visa description"],
    ["China Business Visa",80,"Hello World"],
    ["Some Other Business Visa",75,"Hello World"]];
  $scope.inactive_projs = [
    ["OPT Stem", 100, "OPT Stem description"],
    ["Australia Business Visa", 100, "Australia Business Visa description"]];
})

.controller('projectDetailsCtrl', function($scope) {

})

.controller('documentsCtrl', function($scope) {

})

.controller('documentCategoriesCtrl', function($scope) {

})

.controller('statusCtrl', function($scope) {

})

.controller('documentDetailsCtrl', function($scope) {

})

.controller('logInCtrl', function($scope) {

})
