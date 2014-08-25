window.app = angular.module('Demo', ['ui.router']);

app.value('_', _);

app.value('User', {
  name: 'Radoslav Stankov'
});

app.run(function($rootScope, User) {
  $rootScope.user = User;
});

