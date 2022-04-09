var is_mobile = false;

if( $('#mobile-indicator').css('display')=='block') {
	is_mobile = true;
}

var numFormat = wNumb({
	thousand: ' '
});

$(window).on("resize", function () {

	var is_mobile = false;

	if( $('#mobile-indicator').css('display')=='block') {
		is_mobile = true;
	}

	$(".slick-slider").slick("setPosition");

	slickResponsive();

});

$(window).on("scroll touchmove", function () {

	var scrollPos = $(window).scrollTop();

	$("a[name]").each(function() {
		if (scrollPos >= $(this).offset().top - 170) {
			$(".navbar-nav a").removeClass("active")
			$(".navbar-nav a[href='#"+$(this).attr("name")+"']").addClass("active");
		}
	});

	if (scrollPos > 50) {

		if (!$("header").hasClass("header-fixed")) {

			$("header").addClass("header-fixed");
		}


	} else {

		if ($("header").hasClass("header-fixed")) {

			$("header").removeClass("header-fixed");

		}

	}

	if (scrollPos > 300) {
		$(".up-link").fadeIn(150);
	} else {
		$(".up-link").fadeOut(150);
	}

});



$(window).on("load", function () {



});

var baseUrl = ""

$(document).ready(function () {

	// Team slider

	$(".team-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 500,
		infinite: false,
		rows: 0,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	// Team slider END

	// Service mobile

	if ($("#mobile-indicator").css("display") == "block") {

		$(".service-tmb").click(function (e) {

			if (!$(e.target).hasClass("service-tmb-descr") && !$(e.target).parents().hasClass("service-tmb-descr")) {

				$(this).find(".service-tmb-descr").fadeIn(350);
				$("body").addClass("popup-open");

			}

		});

		$(".service-tmb-descr").click(function (e) {


			if (!$(e.target).hasClass("service-tmb-descr-inner") && !$(e.target).parents().hasClass("service-tmb-descr-inner")) {

				$(this).fadeOut(350);
				$("body").removeClass("popup-open");

			}


		});

	}

	// Service mobile END

	// Pros mobile

	if ($("#mobile-indicator").css("display") == "block") {

		$(".pros-tmb").click(function (e) {

			if (!$(e.target).hasClass("pros-tmb-descr") && !$(e.target).parents().hasClass("pros-tmb-descr")) {

				$(this).find(".pros-tmb-descr").fadeIn(350);
				$("body").addClass("popup-open");

			}

		});

		$(".pros-tmb-descr").click(function (e) {

			if (!$(e.target).hasClass("pros-tmb-descr-inner") && !$(e.target).parents().hasClass("pros-tmb-descr-inner")) {

				$(this).closest(".pros-tmb-descr").fadeOut(350);
				$("body").removeClass("popup-open");

			}


		});

	}

	// Pros mobile END

	// Reviews slider

	$(".reviews-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 750,
		adaptiveHeight: true,
		rows: 0,
		dots: true
	});

	// Reviews slider END

	// Custom slider

	$(".custom-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 750,
		adaptiveHeight: true,
		rows: 0,
		dots: true
	});

	// Custom slider END

	// Stages slider

	$(".stages-slider").on("init", function () {

		$(".stages-nav-item").click(function () {

			$(".stages-slider").slick("slickGoTo", $(this).prevAll().length);

		});

	});

	$(".stages-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide) {

		$(".stages-nav-item").removeClass("active");

		$(".stages-nav-item").filter(function () {

			return $(this).prevAll().length == nextSlide;

		}).addClass("active");

	});

	$(".stages-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 750,
		infinite: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					adaptiveHeight: true
				}
			}
		]
	});

	// Stages slider END

	// Projects slider

	$(".projects-up").click(function () {

		$(".projects-nav").mCustomScrollbar("scrollTo","+=200");

	});

	$(".projects-down").click(function () {

		$(".projects-nav").mCustomScrollbar("scrollTo","-=200");

	});

	$(".projects-slider").on("init", function () {

		$(".projects-nav-item").click(function () {

			$(".projects-slider").slick("slickGoTo", $(this).prevAll().length);

		});

	});

	$(".projects-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide) {

		$(".projects-nav-item").removeClass("active");

		$(".projects-nav-item").filter(function () {

			return $(this).prevAll().length == nextSlide;

		}).addClass("active");

	});

	$(".projects-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 750,
		infinite: false,
		arrows: false,
		swipe: false,
		rows: 0
	});

	// Projects slider END

	// Show more

	$("body").on("click", ".show-more", function () {

		var btn = $(this);

		btn.addClass("loading");

		$.ajax({
			url: btn.attr("href"),
			dataType: "html"
		}).done(function (data) {

			btn.before($(data));

			btn.remove();

		});

		return false;

	});

	// Show more END

	$(".modal").on("shown.bs.modal", function () {


	});

	slickResponsive();

	$(".up-link, .header-logo").click(function () {

		$("html, body").animate({
			scrollTop: 0
		},1000);

	});

	// Anchors

	$(".navbar-nav a").click(function() {

		$(".navbar-nav a").removeClass("active");

		var curLink = $(this);


		var anchor = $(this).attr("href").replace("#","");

		var link = $(this);

		if ($("#mobile-indicator").css("display") == "block") {
			var yDiff = 70;
		} else {
			var yDiff = 150;
		}


		$("html,body").animate({
			scrollTop: $("a[name='"+anchor+"']").offset().top - yDiff
		},1000,function () {
			curLink.addClass("active")
		});

		history.pushState(null,null,$(this).attr("href"));

		return false;


	});

	$("#prodForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "AllMax — Заявка на осмотр производства",
					name: $("#prod_name").val(),
					phone: $("#prod_phone").val(),
					type: "Заявка на осмотр производства"
				}
			}).done(function() {

				formSuccess(form);
				//dataLayer.push({'event': 'gtm-lead-form-3'});
				gtag('event', 'submit', {'event_category': 'Form','event_label': 'prodForm'});

			});
			return false;
		}
	});

	$("#topForm").submit(function(e) {
		if ($(this).valid()) {
			var form_data = new FormData();
			form_data.append('name', $("#top_name").val());
			form_data.append('phone', $("#top_phone").val());
			form_data.append('email', $("#top_email").val());
			form_data.append('subject', 'AllMax — Заявка на получение просчёта');
			form_data.append('type', 'AllMax — Заявка на получение просчёта');
			form_data.append('file', $('#top_file').prop('files')[0]);

			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: form_data,
				contentType: false,
				processData: false
			}).done(function(data) {
				//console.log(data);
				formSuccess(form);
				//dataLayer.push({'event': 'gtm-lead-form-1'});
				gtag('event', 'submit', {'event_category': 'Form','event_label': 'topForm'});
			});
			return false;
		}
	});

	$("#previewForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "AllMax — Заказ 3D-концепции",
					name: $("#preview_name").val(),
					phone: $("#preview_phone").val(),
					type: "Заказ 3D-концепции"
				}
			}).done(function() {

				formSuccess(form);
				//dataLayer.push({'event': 'gtm-lead-form-2'});
				gtag('event', 'submit', {'event_category': 'Form','event_label': 'previewForm'});

			});
			return false;
		}
	});

	$("#mountForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "AllMax — Заявка на расчет",
					name: $("#mount_name").val(),
					phone: $("#mount_phone").val(),
					email: $("#mount_email").val(),
					type: "Заявка на расчет"
				}
			}).done(function() {

				formSuccess(form);
				//dataLayer.push({'event': 'gtm-lead-form-4'});
				gtag('event', 'submit', {'event_category': 'Form','event_label': 'mountForm'});

			});
			return false;
		}
	});

	$("#callbackForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "AllMax — Заявка на обратный звонок",
					name: $("#callback_name").val(),
					phone: $("#callback_phone").val(),
					email: $("#callback_email").val(),
					type: "Обратный звонок"
				}
			}).done(function() {

				formSuccess(form);
				//dataLayer.push({'event': 'gtm-lead-form-0'});
				gtag('event', 'submit', {'event_category': 'Form','event_label': 'callbackForm'});

			});
			return false;
		}
	});


	$("body").on("click", "[data-video]", function () {
		$(this).html('<iframe width="100%" height="100%" src="' + $(this).data("video") + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').addClass("active");
	});

	var scrollPos = $(window).scrollTop();

	if (scrollPos > 50) {

		if (!$("header").hasClass("header-fixed")) {

			$("header").addClass("header-fixed");
		}


	} else {

		if ($("header").hasClass("header-fixed")) {

			$("header").removeClass("header-fixed");

		}

	}

	// Main menu

	$(".navbar-trigger").click(function () {

		$(this).toggleClass("active");

		$(".navbar-wrapper").fadeToggle(150);
		$("body").toggleClass("menu-open");

	});

	$(".navbar-wrapper .close, .navbar-wrapper a").click(function () {

		$(".navbar-wrapper").fadeOut(150);
		$("body").removeClass("menu-open");

	});

	$(".navbar-wrapper").click(function (e) {

		if (!$(e.target).hasClass("navbar-nav") && !$(e.target).parents().hasClass("navbar-nav")) {

			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");

		}


	});



	// Expandable

	$("body").on("click", ".expandable-trigger", function () {

		var exTrigger = $(this);

		if (!exTrigger.hasClass("active")) {

			exTrigger.closest(".expandable").find(".expandable-content").slideDown(500, function () {
				exTrigger.addClass("active").html(exTrigger.data("collapsetext"));
				exTrigger.closest(".expandable").addClass("open");
			});

		} else {

			exTrigger.closest(".expandable").find(".expandable-content").slideUp(500, function () {
				exTrigger.removeClass("active").html(exTrigger.data("expandtext"));
				exTrigger.closest(".expandable").removeClass("open");
			});

		}

	});

	// Datepicker

	var monthsRus = ["янавря", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

	// Range highlight

	$("body").on("mouseover", ".picker__day", function () {

		if ($(this).closest(".picker").hasClass("filter-date-to") && $(this).closest(".picker").find(".range-selected-edge").length == 1) {

			var fromDate = new Date($(this).closest("form").find(".filter-date-from").pickadate("picker").get("select", "yyyy"), $(this).closest("form").find(".filter-date-from").pickadate("picker").get("select", "m") - 1, $(this).closest("form").find(".filter-date-from").pickadate("picker").get("select", "d"));

			var dateString = $(this).attr("aria-label").split(".");

			var overDate = new Date(dateString[2], parseInt(dateString[1]) - 1, dateString[0]);

			var highlightElements = $(this).closest("form").find(".picker__day").filter(function () {

				var dateString = $(this).attr("aria-label").split(".");

				var thisDate = new Date(dateString[2], parseInt(dateString[1]) - 1, dateString[0]);

				return thisDate > fromDate && thisDate <= overDate;

			});

			$(this).closest(".picker").find(".range-selected").removeClass("range-selected");

			highlightElements.addClass("range-selected");

		}

	});

	$("body").on("mousedown", ".picker-clear", function (event) {

		$(this).closest("form").find(".filter-date").each(function () {

			$(this).next(".picker").find(".range-selected").removeClass("range-selected");

			$(this).data( 'pickadate' ).clear();
			$(this).html("");
		});

	});

	$(".input-date").each(function () {

		var pickerField = $(this);

		pickerField.pickadate({
			monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			format: 'd.mm.yyyy',
			min: new Date(),
			selectYears: true,
			selectMonths: true
		});



	});

	$("input[type=file]").each(function () {

		if ($(this).data("label")) {
			var inputLabel = $(this).data("label");
		} else {
			var inputLabel = "Выбрать файл";
		}

		$(this).fileinput({
			showUpload: false,
			showPreview: false,
			showCancel: false,
			browseLabel: inputLabel,
			msgPlaceholder: "",
			dropZoneEnabled: false,
			maxFileCount: 1,
			mainClass: "input-group-lg"
		});

	});

	// Numeric input

	$(document).on("input", ".numeric", function() {
		this.value = this.value.replace(/\D/g,'');
	});


	// Fancybox

	$("a.fancybox").fancybox({
		loop: true,
		clickOutside: "close",
	});

	$(".fancybox-video").fancybox({
		helpers : {
			media : {}
		},
		type: "iframe",
	});

	// Forms

	$("body").on("mouseup", "li.dropdown-header", function () {
		$(this).toggleClass("active");
		$(this).nextAll("li[data-optgroup='" + $(this).data("optgroup") + "']").fadeToggle(150);
		return false;
	});

	$("select").not(".picker__select--month, .picker__select--year, .rates-nav-select").each(function () {
		if ($(this).attr("multiple")) {
			$(this).selectpicker({
				selectAllText: "Выбрать всё",
				deselectAllText: "Снять выбор",
				selectedTextFormat: "count",
				countSelectedText: function(count) {
					return count + " " + declOfNum(count, ['элемент', 'элемента', 'элементов']);
				}
			});
		} else {
			$(this).selectpicker({
				selectAllText: "Выбрать всё",
				deselectAllText: "Снять выбор"
			});
		}
	});

	$("select[multiple]").not(".simple-multi").on("shown.bs.select",function () {
		if (!$(this).prev(".dropdown-menu").find(".dropdown-footer").length) {
			dropdownFooter = '\
			<div class="dropdown-footer">\
			<div class="btn btn-1 btn-ico btn-save">Выбрать</div>\
			<div class="btn btn-cancel">Очистить</div>\
			</div>\
			';
			$(this).prev(".dropdown-menu").find("ul").append(dropdownFooter);
		}
	});



	$("body").on("click",".bootstrap-select .btn-save", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker("toggle");
		return false;
	});

	$("body").on("click",".bootstrap-select .btn-cancel", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker('deselectAll');
		return false;
	});





	$('.input-numeric').bind('keyup paste', function(){
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	if ($("input:text").length) {
		$("input:text").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}

	if ($("textarea").length) {
		$("textarea").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}

	$("body").on("focus","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			placeholder.hide();

		}

	});

	$("body").on("blur","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			if (!el.val() || (el.hasClass("input-phone") && ! /^(?=.*[0-9])[- +()0-9]+$/.test(el.val()))) {
				placeholder.show();
			}

		}

	});

	$("body").on("click",".placeholder",function(e) {
		if ($(this).parent().find("input").length) {
			$(this).parent().find("input").trigger("focus");
		}
		if ($(this).parent().find("textarea").length) {
			$(this).parent().find("textarea").trigger("focus");
		}
	});

	$("body").on("focus","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").addClass("focus");
	});

	$("body").on("blur","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").removeClass("focus")
	});

	validateForms();

});

function yearsName(age) {
	var txt;
	count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return txt;
}

function validateForms() {

	$('.textarea-expandable').autogrow();

	$("input.input-phone").mask("+7 (999) 999-99-99");

	jQuery.validator.addClassRules('phone-email-group', {
		require_from_group: [1, ".phone-email-group"]
	});

	$("select").on("change", function () {
		if (!$(this).closest(".picker").length && !$(this).hasClass("faq-select")) {
			$(this).valid();
		}
	});

	$("body").on("click", ".form-item", function (e) {
		if ($(this).find(".bootstrap-select").length && !$(e.target).hasClass("bootstrap-select") && !$(e.target).parents().hasClass("bootstrap-select")) {
			$(e.target).closest(".form-item").find("select").selectpicker('toggle');
		}
	});

	$("form").each(function() {

		form = $(this);

		$(this).validate({
			focusInvalid: true,
			sendForm : false,
			errorPlacement: function(error, element) {
				if (element[0].tagName == "SELECT") {
					element.closest(".form-item").addClass("error");
					element.closest(".btn-group").addClass("btn-group-error");
					if (element.closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
					} else {
						error.insertAfter(element.closest(".btn-group"));
					}
				} else {
					if (element.attr("type") == "checkbox") {
						element.siblings("label").addClass("checkbox-label-error")
					} else {
						error.insertAfter(element);
						element.closest(".form-group").addClass("form-group-error");
					}
				}

			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass);
				$(element).closest(".form-item").removeClass("error").addClass("valid");
				$(element).closest(".form-group").removeClass("form-group-error");

				if ($(element)[0].tagName == "SELECT") {
					$(element).closest(".form-item").removeClass("error");
					$(element).closest(".btn-group").removeClass("btn-group-error");
					if ($(element).closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
						$(element).closest(".form-item").next("label.error").remove();
					} else {
						$(element).closest(".btn-group").next("label.error").remove();
					}
				} else {
					$(element).next(".error").remove();
					if ($(element).attr("type") == "checkbox") {
						$(element).siblings("label").removeClass("checkbox-label-error")
					}
				}
			},
			invalidHandler: function(form, validatorcalc) {
				var errors = validatorcalc.numberOfInvalids();
				if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
					validatorcalc.errorList[0].element.focus();
				}
			}
		});

		if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
			$(this).find("input.password-repeat").rules('add', {
				equalTo: "#"+form.find("input.password").attr("id")
			});
		}

	});

}

jQuery.extend(jQuery.validator.messages, {
	required: "Не заполнено поле",
	remote: "Please fix this field.",
	email: "Введите правильный e-mail.",
	url: "Please enter a valid URL.",
	date: "Please enter a valid date.",
	dateISO: "Please enter a valid date (ISO).",
	number: "Please enter a valid number.",
	digits: "Please enter only digits.",
	creditcard: "Please enter a valid credit card number.",
	equalTo: "Пароли не совпадают.",

	accept: "Please enter a value with a valid extension.",
	maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
	minlength: jQuery.validator.format("Please enter at least {0} characters."),
	rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
	range: jQuery.validator.format("Please enter a value between {0} and {1}."),
	max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
	min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function readURL(input, img) {

	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			img.attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}
}




function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function formSuccess(form) {

	form.find(".form-group input, .form-group textarea").val("");
	form.find(".placeholder").show();
	$("#successModal").modal("show");
	form.closest(".modal").modal("hide");
}

function slickResponsive() {

	if ($("#mobile-indicator").css("display") == "block") {

		if ($(".projects-nav").hasClass("mCustomScrollbar")) {

			$(".projects-nav").mCustomScrollbar("destroy");

		}

		if (!$(".projects-nav").hasClass("slick-initialized")) {

			$(".projects-nav").slick({
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: true,
				rows: 0,
				infinite: false
			});

		}

	} else {

		if ($(".projects-nav").hasClass("slick-initialized")) {

			$(".projects-nav").slick("unslick");

		}

		if (!$(".projects-nav").hasClass("mCustomScrollbar")) {

			$(".projects-nav").mCustomScrollbar({
				axis: "y"
			});

		}


	}

}


function getScrollBarWidth () {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";

	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild (inner);

	document.body.appendChild (outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;

	document.body.removeChild (outer);

	return (w1 - w2);
};

(function($) {
	$.fn.autogrow = function() {
		return this.each(function() {
			var textarea = this;
			$.fn.autogrow.resize(textarea);
			$(textarea).focus(function() {
				textarea.interval = setInterval(function() {
					$.fn.autogrow.resize(textarea);
				}, 500);
			}).blur(function() {
				clearInterval(textarea.interval);
			});
		});
	};
	$.fn.autogrow.resize = function(textarea) {
		var lineHeight = parseInt($(textarea).css('line-height'), 10);
		var lines = textarea.value.split('\n');
		var columns = textarea.cols;
		var lineCount = 0;
		$.each(lines, function() {
			lineCount += Math.ceil(this.length / columns) || 1;
		});
		var height = lineHeight * (lineCount) + 20;
		$(textarea).css('height', height);
	};
})(jQuery);