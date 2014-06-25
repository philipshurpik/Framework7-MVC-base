require.config({
	paths: {
		handlebars: "lib/handlebars",
		text: "lib/text",
		hbs: "lib/hbs"
	},
	shim: {
		handlebars: {
			exports: "Handlebars"
		}
	}
});
define('app', ['js/list/listController'], function(listController) {
	var f7 = new Framework7({
		modalTitle: 'F7-MVC-Base',
		animateNavBackIcon: true
	});
	var mainView = f7.addView('.view-main', {
		dynamicNavbar: true
	});
	listController.init();
	return {
		f7: f7,
		mainView: mainView,
		storageName: "f7List"
	};
});