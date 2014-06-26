define(["app","js/contact/contactView"], function(app, ContactView) {

	var state = {isNew: false};
	var contact = null;

	function init(query){
		if (query && query.id) {
			var contacts = JSON.parse(localStorage.getItem("f7Contacts"));
			for (var i = 0; i< contacts.length; i++) {
				if (contacts[i].id === query.id) {
					contact = contacts[i];
					state.isNew = false;
					break;
				}
			}
		}
		else {
			contact = {};
			state.isNew = true;
		}
		ContactView.render({
			model: contact,
			state: state
		});
	}

	return {
		init: init
	};
});