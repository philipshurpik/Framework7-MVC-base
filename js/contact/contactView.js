define(['hbs!js/contact/contact'], function(viewTemplate) {
	var $ = Framework7.$;

	function render(params) {
		$('.contact-page').html(viewTemplate({ model: params.model }));
		$('.contacts-header').text(params.state.isNew ? "New contact" : "Contact");
	}

	return {
		render: render
	}
});