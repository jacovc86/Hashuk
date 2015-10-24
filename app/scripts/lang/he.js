'use strict';
angular.module('hashukApp')
.factory('Hebrew', function() {
	var wordmap = {};
	wordmap.app = {
		'app_name' : 'השוק',
		'login'						: 				'התחבר',
		'email' 					: 				'דואר אלקטרוני',
		'password' 					: 				'סיסמא',
		'login_via_facebook'		: 				'התחבר באמצעות פייסבוק',
		'login_via_google'			: 				'התחבר באמצעות גווגל+',
		'login_via_twitter'			: 				'התחבר באמצעות טוויטר',
		'create_account' 			: 				'צור חשבון חדש'

	}
	wordmap.account = {
		'account_title'				: 				'הגדרות חשבון',
		'create_account_title'		: 				'צור חשבון'
	}
	return {
		get: function(word) {
			return wordmap[word];
		},
		getAll: function() {
			return wordmap;
		},
		getApp: function() {
			return wordmap.app;
		},
		getAccount: function() {
			return wordmap.account;
		}
	}
});