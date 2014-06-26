define(['hbs!js/list/contact-list-item'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		$('.contacts-list ul').html(template(params.model));
		bindEvents(params.bindings);
	}

	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render
	};
});