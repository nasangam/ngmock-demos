(function(){
  "use strict";
  angular.module('meetup')
    .service('meetupService', ['$http', '$q','sponsers.config', function($http,$q,sponsersCfg) {     
        function getData(type){
            var def = $q.defer(),
                p = def.promise,
                api = (type=='members'?sponsersCfg.apis.members:sponsersCfg.apis.sponsers);
            
            $http.get(api).then(function(resp){
                   def.resolve(resp.data); 
               }, function(error){ 
                   console.error(error);
               });
            
            return p;
        }
         return { getData: getData};  
        }
    ]);
 
})();
