(function(){
 'use strict';
function routes($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/sponsers');
        $stateProvider.state('sponsers', {
                url: '/sponsers',
                views: {
                    '' : {
                        templateUrl: '/app/src/templates/sponsers.html',
                        controller:"sponsersController"
                    },
                    'header': {
                        templateUrl: '/app/src/templates/header.html'
                    },
                    'footer':{
                        templateUrl: '/app/src/templates/footer.html'
                    }
                }
            }).state('members', {
                url: '/members',
                views: {
                    '' : {
                        templateUrl: '/app/src/templates/members.html',
                        controller:"membersController"
                    },
                    'header': {
                        templateUrl: '/app/src/templates/header.html'
                    },
                    'footer':{
                        templateUrl: '/app/src/templates/footer.html'
                    }
                }
            });
}; 
routes.$inject = ['$stateProvider','$urlRouterProvider']; 
angular.module('meetup').config(routes);
})();