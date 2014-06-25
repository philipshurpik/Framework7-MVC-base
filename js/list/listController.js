define(["js/list/listView"], function(ListView) {

	function init() {
		var contacts = loadContacts();
		ListView.render({ model: contacts });
	}

	function loadContacts() {
		var f7Contacts = localStorage.getItem("f7Contacts");
		var contacts = f7Contacts ? JSON.parse(f7Contacts) : tempInitializeStorage();
		return contacts;
	}

	function tempInitializeStorage() {
		var contacts = [
			{id: "1", firstName: "Alex", lastName: "Black", phone: "+380501234567" },
			{id: "2", firstName: "Kate", lastName: "White", phone: "+380507654321" }
		];
		localStorage.setItem("f7Contacts", JSON.stringify(contacts));
		return JSON.parse(localStorage.getItem("f7Contacts"));
	}

	return {
		init: init
	};
});