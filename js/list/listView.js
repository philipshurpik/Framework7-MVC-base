define(['hbs!js/list/contact-list-item'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		$('.contacts-list ul').html(template(params.model));
	}

	return {
		render: render
	};
});