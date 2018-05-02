$(document).ready(function() {
	handlebarsCompiling("gd-template", allGoods, ".goods");

	var filtersOpenButton = document.getElementById("js-filters-button");
	var filtersCloseButton = document.getElementById("js-filters-close");
	var filtersCategoriesItem = document.getElementsByClassName("filters-part__text-item");
	var $mainPosition = $(".main").offset();
	var $buttonPosition = $(".filters-button").position();
	var $filterButton = $(".filters-button");
	var $filterButtonHeight = $filterButton.height();

	filtersOpenButton.onclick = toggleFilters;
	filtersCloseButton.onclick = toggleFilters;
	for (var i = 0; i < filtersCategoriesItem.length; i++) {
		filtersCategoriesItem[i].onclick = toggleColor;
	}

	$(window).scroll(function() {
		var $scrollPosition = $(this).scrollTop();
		var $newLetterPosition = $(".news-letter").offset();

		if ($scrollPosition > $mainPosition.top && 
			$scrollPosition < $newLetterPosition.top-(50+$filterButtonHeight)) {
			$filterButton.addClass("filters-button-open");
		} else {
			$filterButton.removeClass("filters-button-open");
		}
	})

	var $dotLeft = $(".range-dot-left");
	var $dotRight = $(".range-dot-right");
});

function toggleFilters() {
	var filters = document.getElementById("js-filters");
	var filtersCloseButton = document.getElementById("js-filters-close");

	filters.classList.toggle("filters-open");
	filtersCloseButton.classList.toggle("filters-close-open");
}

function toggleColor(e) {
	var button = e.target;
	button.classList.toggle("filters-part__text-item--active");
}