angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])


.run(['$templateCache', function($templateCache) {
        $templateCache.put('src/slidepoints.html',
            '<div class="slider-pager">' +
            '<span class="slider-pager-page" ng-repeat="s in arrSlides track by $index" ng-class="{active: $index == currentSlide}">' +
            '<i class="icon ion-record"></i></span></div>');
    }])
    .directive('slidepoints', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                numslides: '=',
                model: '='
            },
            link: function(scope, element, attrs, ctrl) {
                scope.arrSlides = [];
                scope.currentSlide = 0;

                scope.$watchCollection('numslides', function(newNumSlides) {
                    scope.$evalAsync(function() {
                        scope.arrSlides = [];
                        for (var i = 0; i < parseInt(newNumSlides); i++) {
                            scope.arrSlides.push(i);
                        }
                    });
                });

                scope.model.setCurrentSlide = function(index) {
                    scope.currentSlide = index;
                };
            },
            templateUrl: 'src/slidepoints.html'
        };
    });
