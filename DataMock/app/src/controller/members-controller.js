(function(){
  "use strict";
  angular.module('meetup')
    .controller('membersController', ['$scope','$http', 'meetupService',function ($scope,$http, meetupSvc) {   
        meetupSvc.getData('members').then(function(data){
           $scope.members = data; 
        });
    }]);
})();
 