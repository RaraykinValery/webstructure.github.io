//Элементу, который должен пропадать и появляться, необходимо назначить классс .toggle-elem.
//К элементу, при клике по которому будет появляться и исчезать .toggle-elem, необходимо применить метод hiddenBlock.

(function($){
	jQuery.fn.hiddenBlock = function(){

	var make = function(){
		var clicedEl = $(this);
		var toggleEl = $(".toggle-elem");
		clicedEl.click(function() {
			toggleEl.toggleClass("close");
			if(toggleEl.hasClass("close")) {
				clicedEl.html("Читать полностью");
			} else {
				clicedEl.html("Скрыть");
			}
		});
	};

	return this.each(make); 
	};
})(jQuery);