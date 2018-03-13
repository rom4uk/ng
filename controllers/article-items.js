angular.module('article')
    .component('articleItems', {
      controller: articleData,
      template: `
      <div class="container bg-info">
        <div class="page-header well" ng-repeat="article in $ctrl.articles" art="article">
        <a href="#!/{{article.id}}" class="text-primary" role="button" ng-bind-html='article.title.rendered'></a>
        <p class="text-muted" ng-bind-html='article.excerpt.rendered'></p>
        </div>
      </div>
      `
    });

function articleData(dataService) {
  let ctrl = this;

  ctrl.articles = [];
  
  dataService.getData()
   .then(response => {
     ctrl.articles = response.data;
   })
   .catch((err) => {
     console.log(err);
   });
}