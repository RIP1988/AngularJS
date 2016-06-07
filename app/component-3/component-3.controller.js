angular.module('app.component3')
.controller('component3Controller', function($scope, $http, $modal, response){
   'use strict';
   $scope.books = response.data;
   $scope.filterGenre = '';
   $scope.filterYear = '';
   $scope.filterAuthor = '';
   $scope.filterTitle = '';
   $scope.filteredTableVisible = false;

   $scope.showFiltered = function (selectedBookGenre) {
     $scope.selectedBookGenre = selectedBookGenre;
     $scope.filteredTableVisible = true;
   };

});
