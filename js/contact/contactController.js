define(["app","js/contact/contactView"], function(app, ContactView) {

	var state = {isNew: false};
	var contact = null;
	var bindings = [{
		element: '.contact-save-link',
		event: 'click',
		handler: saveContact
	}];

	function init(query){
		if (query && query.id) {
			var contacts = JSON.parse(localStorage.getItem("f7Base"));
			for (var i = 0; i< contacts.length; i++) {
				if (contacts[i].id === query.id) {
					contact = contacts[i];
					state.isNew = false;
					break;
				}
			}
		}
		else {
			contact = { id: Math.floor((Math.random() * 100000) + 5).toString()};
			state.isNew = true;
		}
		ContactView.render({
			model: contact,
			state: state,
			bindings: bindings
		});
	}

	function saveContact() {
		var contacts = JSON.parse(localStorage.getItem("f7Base"))
		var newContact = app.f7.formToJSON('#contactEdit');
		if (state.isNew) {
			contacts.push(newContact)
		}
		else {
			for (var i = 0; i< contacts.length; i++) {
				if (contacts[i].id === newContact.id) {
					contacts[i] = newContact;
					break;
				}
			}
		}
		localStorage.setItem("f7Base", JSON.stringify(contacts));
		app.mainView.goBack();
		app.router.load('list');
	}

	return {
		init: init
	};
});