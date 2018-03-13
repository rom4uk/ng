angular.module('article')
    .component('articleItems', {
      controller: articleData,
      template: `
      <div class="container bg-info">
        <div class="page-header well" ng-repeat="article in $ctrl.articles">
        <a href="#!/{{article.id}}" class="text-primary" role="button" ng-bind-html='article.title.rendered'></a>
        <p class="text-muted" ng-show="!article.sticky" ng-bind-html='article.excerpt.rendered'></p>
        <div ng-show="article.sticky" ng-bind-html='article.content.rendered'></div>
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