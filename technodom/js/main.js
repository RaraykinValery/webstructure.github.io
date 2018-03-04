// Создание breadcrumbs
var links = {
				"links": [
							{
								"title" : "Главная",
								"url" : "#"
							},
							{
								"title" : "Ноутбуки, компьютеры",
								"url" : "#"
							},
							{
								"title" : "Ноутбуки",
								"url" : "#"
							}
						]
			};

var container = $("#nav");
var source    = $("#breadcrumbs").html();
var template  = Handlebars.compile(source);
var html      = template(links);
container.append(html);

//Появляющийся и скрывающийся блок
$("#laptop__read-all").hiddenBlock();
