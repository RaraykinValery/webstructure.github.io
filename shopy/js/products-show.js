function setCurrentSlide(n) {
	var pictures = document.getElementsByClassName("presentation-slider__picture");
	var dots     = document.getElementsByClassName("thumbnail");

	for (var i = 0; i < pictures.length; i++) {
		pictures[i].style.display = "none";
	}
	pictures[n].style.display = "block";

	for (i = 0; i < dots.length; i++) {
		dots[i].classList.remove("thumbnail-active");
	}
	dots[n].classList.add("thumbnail-active");
}

function highlightSize(e) {
	var sizes = document.getElementsByClassName("gd-sizes__size");
	var target = e.target;

	for (var i = 0; i < sizes.length; i++) {
		sizes[i].classList.remove("gd-sizes__size--active");
	}

	target.classList.add("gd-sizes__size--active");
}


//*** Main ***//

$(document).ready(function() {
	handlebarsCompiling("gd-template", goods, ".goods");

	setCurrentSlide(0);

	var sizes = document.getElementsByClassName("gd-sizes__size");
	for (var i = 0; i < sizes.length; i++) {
		sizes[i].onclick = highlightSize;
	}
});