define(['hbs!js/contact/contact'], function(viewTemplate) {
	var $ = Framework7.$;

	function render(params) {
		$('.contact-page').html(viewTemplate({ model: params.model }));
		$('.contacts-header').text(params.state.isNew ? "New contact" : "Contact");
		bindEvents(params.bindings);
	}

	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render
	}
});