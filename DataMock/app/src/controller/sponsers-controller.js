(function(){
  "use strict";
  angular.module('meetup')
    .controller('sponsersController', ['$scope','$http', 'meetupService',function ($scope,$http, meetupService) {   
        meetupService.getData('sponsers').then(function(data){
           $scope.sponsers = data; 
        });
    }]);
})();
