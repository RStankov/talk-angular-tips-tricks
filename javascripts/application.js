window.app = angular.module('Demo', ['ui.router']);

app.value('_', _);

app.value('User', {
  name: 'Radoslav Stankov'
});

app.service('Product', function(_) {
  var products = [{
    id:   1,
    name: 'iPhone',
    price: 700,
  }];

  this.all = function() {
    return products;
  };

  this.save = function(object, fn) {
    if (!object.name || !object.price) {
      return;
    }

    if (!object.id) {
      object.id = + new Date();
      products.push(object);
    } else {
      angular.extend(this.find(object.id), object);
    }

    fn();
  };

  this.find = function(id) {
    return _.find(products, function(p) { return p.id == id });
  };

  this.destroy = function(id, fn) {
    products = _.remove(function(p) { return p.id == id });
    fn();
  };
});

app.directive('appPanel', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '=title'
    },
    template:
      '<div class="panel panel-default">' +
        '<div class="panel-heading" ng-bind="title"></div>' +
        '<div class="panel-body" ng-transclude=""></div>' +
      '</div>'
  };
});


app.run(function($rootScope, $state, User) {
  $rootScope.user = User;
  $rootScope.state = $state;
});

