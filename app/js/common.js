$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};	

	

	$("#top_slider, .top_slider").owlCarousel({
	 	navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		// autoPlay: true,
		pagination: true,
		singleItem:true
  	});   

  	$('.slider-review').owlCarousel({
  		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,		
		pagination: true,
		items: 2
  	});

  	jQuery("form.mail").submit(function() { //Change
			var th = jQuery(this),
			redirect = th.data('redirect');
			jQuery.ajax({
				type: "POST",
				url: this.action,
				data: th.serialize()
			}).done(function() {
		//	location.href= redirect;	
		alert('Сообщение отправлено!');
		setTimeout(function() {			
			th.trigger("reset");
		}, 1000);
	 });
			return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	function wHeight(){
		return $(window).height();
	};	
	function winWidth(){
		return $(window).width();
	};	

	// Dropdown lists start
	$('.btn-menu').on('click',function(){
		var navList = $('nav ul li'),
			elHeight = navList.height();
		$('.lang-switch').css('top', (navList.length-1) * elHeight + 121 +'px')
			.toggleClass('active');;
		$(this).toggleClass('open-menu');
		navList.not(':last-child').slideToggle('slow');
	});	

	$('.dpd-prise').on('click', function(){
		$(this).next().slideToggle('fast');
		$(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
	});

	var mobContact = $('.mob-contact');
	mobContact.find('button').on('click', function(){
		$(this).find('i.fa')
			.toggleClass('fa-angle-down fa-angle-up');
		mobContact.toggleClass('active')
			.next().find('.col-md-2').slideToggle('slow');
	});
	// Dropdown lists end

	function mapInit(){
		$('.gmap').each(function(){
			var container = this;

			var mapOptions = {
				zoom: $(container).data('zoom'),
				zoomControl: true,
				mapTypeControl: false,
				streetViewControl: false,
			scrollwheel: false, //zoom on scroll
			draggable: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(container, mapOptions);
		var geocoder = new google.maps.Geocoder();

		geocoder.geocode(
			{'address': $(container).data('address')},
			function(results, status) {			
				if (status === google.maps.GeocoderStatus.OK) {
					new google.maps.Marker({
						position: results[0].geometry.location,
						map: map,
						icon: $(container).data('marker')
					});
					map.setCenter(results[0].geometry.location);
				}
			}
			);
	});
	};
	mapInit();

	var pageAjax = $('.ajax-nav li');
	pageAjax.eq(0).addClass('active');

	pageAjax.on('click', function(){
		var url       = $(this).data('ajax'),
				offset    = $(this).index(),
				filter    = $(this).data('filter'),
				contBlock = $('#ajax-page .container-fluid'),
				speener   = $('.speener');

		pageAjax.removeClass('active');		
		contBlock.html('');

		speener.css('display','block');
		$.get(url+'?offset='+offset+'&filter='+filter, function(data){	
			speener.fadeOut('fast');
			contBlock.append(data);	
			mapInit();		
			pageAjax.eq(offset).addClass('active');
		});
	}); 
	jQuery( '.slider-inner' ).sliderPro({
		height: 515,
		arrows: true,
		buttons: true,
		waitForLayers: true,	
		touchSwipe: false,		
		autoplay: false,
		autoScaleLayers: false,
		breakpoints: {
			500: {
				thumbnailWidth: 120,
				thumbnailHeight: 50
			}
		}
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var tab = $('.tabs .tabs-nav li');
	tab.eq(0).addClass('active');
	tab.on('click', function(){
		var el = $(this).data('attr');
		tab.not(this).removeClass('active');
		$(this).addClass('active');
		$('.tab-item').css('display', 'none');
		$('#'+ el ).fadeIn('slow');
	});

	$('.popup select').each(function(){
		var $this = $(this), 
		numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			var ind = $(this).index();

			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			$('.popup select').children('option').eq(ind).attr("selected", "selected");	
	});
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});




	var mobSlider = function(el,item){
		$(el).addClass('mobile-slider')
			.find(item).addClass('item');

		$(".mobile-slider").owlCarousel({
	 	  navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  navigation : true,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  // autoPlay: true,
		  pagination: false,
		  singleItem:true
	  }); 
	};


	function popup(){	
		$('.popup-btn').on('click',function(event){
			event.preventDefault();		
			var popID = $(this).data('id');		
			$('#'+ popID).fadeIn('slow')
			.css('height', $(window).height() + 'px')
			.find('form, .popup-content')
			.append('<span class="fade_out">&#9587;</span>')

			$('.fade_out').click(function(){
				$('#'+ popID).fadeOut('slow');
				$(this).detach();
			});
		});
	};
	popup();

	function titleLength(){
		var title   = $('#top-b h1'),
			titleC  = title.text(),
			tLength = titleC.length;	

		if (tLength > 30) {
			title.css('font-size','17px');
		};
	};

	if (winWidth() < 768) {
	  	mobSlider('#method .col-md-12','.col-md-4');
	  	mobSlider('#result .row','.col-md-3');
		titleLength();
  	};

});
