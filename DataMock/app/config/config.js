(function(){
  "use strict";
  angular.module('meetup', ['ui.router','E2EMocks']);
  angular.module('meetup').value('sponsers.config', {
      "apis": {
          sponsers:"/sponsers",
          members:"/members"
      }
  });
})();
