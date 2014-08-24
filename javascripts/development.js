app.invoke = function(fn) {
  var element = angular.element('[ng-app="' + this.name + '"]');
  return element.injector().invoke(fn);
}
