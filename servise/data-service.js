angular.module('article')
       .service('dataService', dataService);

function dataService($http) {
  let ctrl = this;

  ctrl.getData = getData;
  ctrl.getId = getId;

  function getData () {
    return $http({method: 'GET',
     url: 'https://inx.wp-funnel.com/wp-json/wp/v2/posts'
   });
  }

  function getId (id) {
    return $http({method: 'GET',
     url: `https://inx.wp-funnel.com/wp-json/wp/v2/posts/${id}`
   });
  }
}