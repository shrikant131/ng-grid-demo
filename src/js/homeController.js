'use strict';

angular.module('angularGruntSeed')

.controller('HomeController', ['$scope', 'GridService',
    function($scope, gridService) {

        gridService.getContributors().then(function(data) {
            $scope.myData = data;
        });

        $scope.gridOptions = {
            data: 'myData'
        };
    }
]);
