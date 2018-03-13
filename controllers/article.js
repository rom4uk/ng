angular.module('article')
    .component('articleId', {
      controller: articleData,
      template: `
      <div class="container bg-info">
        <div class="page-header well">
        <h3 class="text-primary" ng-bind-html='$ctrl.article.title.rendered'></h3>
        <p class="text-muted" ng-bind-html='$ctrl.article.excerpt.rendered'></p>
        <div ng-bind-html='$ctrl.article.content.rendered'></div>        
        </div>
      </div>
      `
    });

function articleData($routeParams, dataService) {
  let ctrl = this;

  ctrl.article = {};
  ctrl.id = $routeParams.id;
  
  dataService.getId(ctrl.id)
   .then(response => {
     ctrl.article = response.data;
   })
   .catch((err) => {
     console.log(err);
   });
}