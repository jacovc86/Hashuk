angular.module('hashukApp').
directive('product', function(Items) {
	return {
		restrict: 'E',
		scope: true,
		template: '<div>{{item}}</div>',
		link: function(scope, element, attrs) {
			scope.item = Items.get(attrs.item);
		}
	}
});

