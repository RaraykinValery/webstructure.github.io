function buttonsPositionHandler() {
	var $heroContent = $(".container");
	var $dots = $(".hero-buttons");

	function changePosition() {
		var position = $heroContent.offset();
		var padding = $heroContent.css("padding-left");
		padding = parseInt(padding, 10);
		$dots.css("left", position.left + padding);
	}

	return changePosition;
}

$(document).ready(function() {
	handlebarsCompiling("slides-template", slides, ".hero-slider");
	//Slick-slider
	$(".hero-slider").slick({
		arrows : false,
		dots : true,
		dotsClass: "hero-buttons",
		// autoplay: true,
		autoplaySpeed: 2000
	});

	var changePosition = buttonsPositionHandler();
	changePosition();
	$(window).resize(changePosition);

	handlebarsCompiling("gd-template", goods, ".goods");
	handlebarsCompiling("best-gd-template", bestGoods, ".best-sales");

});

