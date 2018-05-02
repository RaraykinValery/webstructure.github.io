function handlebarsCompiling(myTemplate, data, container) {
	var source   = document.getElementById(myTemplate).innerHTML;
	var template = Handlebars.compile(source);
	var html    = template(data);
	var $goodsContainer = $(container);
	$goodsContainer.append(html);
}

$(document).ready(function() {
	$(".nav__button").click(function() {
		var $links = $(".nav__link");
		var $display = $links.css("display");
		if ($display === "block") {
			$links.css("display", "none");
		} else {
			$links.css("display", "block");
		}
	});
});

