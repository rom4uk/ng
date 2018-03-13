angular.module('article', ['ngSanitize', 'ngRoute']);

angular.module('article')
      .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
          template: '<article-items></article-items>'
        })
        .when('/:id', {
          template: '<article-id></article-id>'
        })
        .when('/:title', {
          template: '<article-title></article-title>'
        })
        .otherwise({
          template: '<h1>404 no such page</h1>'
        })
      });