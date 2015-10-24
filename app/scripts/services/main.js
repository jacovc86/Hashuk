'use strict';

angular.module('hashukApp')
.factory('Auth', ['$firebaseAuth', function($firebaseAuth) {
	var ref = new Firebase('https://hashuk.firebaseio.com/users');
	return $firebaseAuth(ref);
}])
.service('Items', function($firebaseArray) {
	var ref = $firebaseArray(new Firebase('https://hashuk.firebaseio.com/items'));
	this.get = function(key) {
		var item = ref.$getRecord(key);
		console.log(item);
		return item;
	}
});