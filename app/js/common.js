$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};	

	if ($('.page-not-found').length) {
		$('.page-not-found').height(wHeight() - ($('header').height()+$('footer').height()));
	};

	if (!$('#review .review').length) {
		$('.notEmpty').css('display','none');
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


  	
	var lng = $('.lang-switch a').attr('class');	        	        
  	jQuery("form.mail").submit(function() { //Change
		var th = jQuery(this),
			redirect = th.data('redirect');

			// alert(th.action);

		if(th.find('input#phone').val().length < 6){
			if(lng === 'uk'){	          	
				alert('Укажите телефон!')
			}else{
				alert('Вкажіть телефон!');
			}
		}else if(th.find('input#name').val().length < 3){
			if(lng === 'uk'){	          	
				alert('Укажите ваше имя!');
	    }else{
				alert('Вкажіть ваше ім\'я!')			
			}
		}else{
			jQuery.ajax({
				type: "POST",
				url: th.action,
				data: th.serialize()
			}).done(function() {
				//	location.href= redirect;			
				if(lng === 'uk'){	          
					alert('Сообщение отправлено!');
		        }else{
					alert(' Повідомлення відправленно!');	            
			    };
				setTimeout(function() {			
					th.trigger("reset");
					$('.fade_out').click();
				}, 1000);
			});			
		}
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

	function htmlReplase(item){
		// var el = $(),
		var el = $(item),
			elL = el.length;

		for(var i = 0; i<elL; i=i+1 ){
			var tel = el.eq(i).data('p');
			el.eq(i).html(tel);
		};
	};
	

	

	// Dropdown lists start
	$('.btn-menu').on('click',function(){
		var navList = $('nav>ul>li'),
			elHeight = navList.height();
		$('.lang-switch').css('top', (navList.length-1) * elHeight + 150 +'px')

		//$('.lang-switch').css('top', (navList.length-1) * elHeight + 121 +'px')
		// $('.lang-switch').css('top', '370px')

			.toggleClass('active');

		if ($(this).hasClass('open-menu')) {
			navList.find('ul.visible').removeClass('visible');
			$('.lang-switch').removeClass('active');
			navList.not(':last-child').removeClass('visible')
				.slideUp('slow')
				.find('a').removeClass('active');	
		}else{
			navList.not(':last-child').slideToggle('slow');
		};		
		$('nav>ul>li>a').not('.ripple').on('click', function(event){	
			event.preventDefault();	
			navList.not($(this).parent('li')).toggleClass('visible');
			$(this).toggleClass('active').next().toggleClass('visible');
			$('.lang-switch').toggleClass('active');
		});
		$(this).toggleClass('open-menu');

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
		    var latlng = new google.maps.LatLng(
		        parseFloat($(container).data('lat')),
		        parseFloat($(container).data('lng'))
		    );
		    var mapOptions = {
		        zoom: parseInt($(container).data('zoom')),
		        center: latlng,
		        zoomControl: true,
		        mapTypeControl: false,
		        streetViewControl: false,
		        scrollwheel: true,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
		    var map = new google.maps.Map(container, mapOptions);

		    var marker = new google.maps.Marker({
		        position: latlng,
		        map: map,
		        icon: $(container).data('marker')
		    });
		});
	};
	mapInit();

	var ajaxToggle = $('.side-toggle .link-toggle');
	ajaxToggle.on('click',function(){

		if ($(this).parent('li').hasClass('active')) {
			$(this).next().slideUp('fast');
			$(this).parent('li').removeClass('active');
		}else{
			ajaxToggle.parent('li').removeClass('active');
			ajaxToggle.not($(this)).next()
				.slideUp('fast');

			$(this).parent('li').addClass('active');
			$(this).next().slideDown('fast');
		};
	});



	var pageAjax = $('.ajax-nav li, .custom-button');
	// pageAjax.eq(0).addClass('active');

	pageAjax.on('click', function(){		
		var url       = $(this).data('ajax'),
			offset    = $(this).index(),
			filter    = $(this).data('filter'),
			parrent   = $(this).data('parrent'),
			contBlock = $('#ajax-page .container-fluid'),
			speener   = $('.speener');
		
		pageAjax.removeClass('active');		
		contBlock.html(''); 
		$(this).addClass('active');

		speener.css('display','block');
		$.get(url+'?offset='+offset+'&parrent='+parrent+'&filter='+filter, function(data){	
			speener.fadeOut('fast');
			contBlock.append(data);	
			mapInit();		
		});
	});

	var blogAjax = $('.blog-ajax-nav li');		
	$('.btn-ajax-news').on('click',function(){		
		var url       = $(this).data('ajax'),
				filter    = $(this).data('filter'),
				parrent   = $(this).data('parrent'),
				speener   = $('.speener'),
				limit     = $(this).data('limit'),
				tpl       = $(this).data('tpl'),
				dataCat   = $(this).text(),
				contBlock = $('#ajax-page .container-fluid');

		contBlock.html(''); 
		speener.css('display','block');
		$.get(url+'?filter='+filter+'&tpl='+tpl+'&parrent='+parrent+'&limit='+limit, function(data){	
			speener.fadeOut('fast');
			contBlock.append(data);			
			blogAjax = $('.blog-ajax-nav li');
			if(lng === 'uk'){	          	
				$('.side-nav h3').text("Другие " +dataCat);
	    	}else{				
				$('.side-nav h3').text("Інші " +dataCat);				
			}
			ajaxBlogPage(blogAjax);
		});
	});

	var ajaxBlogPage = function(el){
		el.on('click', function(){			
			var url       = $(this).data('ajax'),
					offset    = $(this).data('offset') - 1,				
					parrent   = $(this).data('parrent'),
					filter    = $(this).data('filter'),
					contBlock = $('#ajax-page .container-fluid .appended-block'),
					speener   = $('.speener');

			// console.log(url+'?offset='+offset+'&parrent='+parrent);

			el.removeClass('active');		
			contBlock.html('');	
			speener.css('display','block');

			$.get(url+'?offset='+offset+'&parrent='+parrent+'&filter='+filter, function(data){
				speener.fadeOut('fast');
				contBlock.append(data);

				el.eq(offset).addClass('active');		
				// blogAjax = $('.blog-ajax-nav li');
				// ajaxBlogPage(blogAjax);				
			});
		});
	};
	


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

	$('.maska-tooltip').on('mouseover',function(){
		$(this).find('p').removeClass('active');
	});

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

		// $('span.arrow').on('click',function(){
		// 	$(this).toggleClass('active');

		// 	$styledSelect.addClass('active');
		// 	$styledSelect.click();	
		// });
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$this.after('<span class="arrow"></span>');
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
		$(document, '.select-styled').click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
			$('span.arrow').detach();
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
		$('.popup-btn, .foto-zoom').on('click',function(event){
			event.preventDefault();		
			var popID = $(this).data('id');		
			$('#'+ popID).fadeIn('slow')
			.css('height', $(window).height() + 'px')
			.find('form, .popup-content')
			.append('<span class="fade_out">&#9587;</span>');
			$('body').css('overflow','hidden');

			$('.fade_out').click(function(){
				$('#'+ popID).fadeOut('slow');
				$(this).detach();
				$('body').css('overflow','visible');
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

		var form = $('.popup form.mail');
			winH = $(window).height();

		if(form.height() > winH){
			form.css({
				'height': winH + 'px',
				'overflow': 'auto'
			});
		};
  	}else{
  		$('#contact-line a.mob-phone, footer .place a.mob-phone').on('click', function(event) {
  			event.preventDefault();  			
  		});
  	};  	

  	$(window).on('load', function() {
  		htmlReplase('#contact-line span');
  		htmlReplase('footer .mob-phone span');  		
  	});
});
