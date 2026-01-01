;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;
				if(($(this.element).parent().hasClass('music-sheet-design-bg')) ||
				($(this.element).is('#choral-arrangements-heading')) ||
				($(this.element).hasClass('search-box-wrapper')) ||
				($(this.element).parent().parent().parent().parent().hasClass('arrangement-nav')))
				{
					return;
				}
				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '100%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

			// if ( $win.scrollTop() > 100 ) {
			if ( $win.scrollTop() > 40 ) {
				$('.fh5co-nav').addClass('scrolled');
			} else {
				$('.fh5co-nav').removeClass('scrolled');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};


	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-slider-wrwap .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	});

	  	
	};

	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar();
		}
	};

	var DateTimePickerFunc = function() {
		if ($('#taskdatetime').length > 0) {
			$('#taskdatetime').datetimepicker();
		}
	}

	var zoomFunc = function() {
		if ($('.zoomerang').length > 0) {
	   	// Zoomerang.config({maxHeight:730,maxWidth:900}).listen('.zoomerang');

	   	$('.fh5co-bg-img').each(function(){
	   		$(this).css('width', '100%');
	   	});
	   	Zoomerang
                .config({
                    maxHeight: 900,
                    maxWidth: 800,
                    bgColor: '#000',
                    bgOpacity: .85,
                    onOpen: openCallback,
                    onClose: closeCallback,
                    onBeforeOpen: beforeOpenCallback,
                    onBeforeClose: beforeCloseCallback
                })
                .listen('.zoomerang')

            function openCallback (el) {
                console.log('zoomed in on: ')
                // console.log(el)
            }

            function closeCallback (el) {
                console.log('zoomed out on: ')
                // console.log(el)
            }

            function beforeOpenCallback (el) {
            	console.log('on before zoomed in on:')
            	// console.log(el)
            }

            function beforeCloseCallback (el) {
            	console.log('on before zoomed out on:')
            	// console.log(el)
            }

	   }
	}

	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		fullHeight();
		parallax();
		DateTimePickerFunc();

		$('.fh5co-bg-img').each(function(){
   		$(this).css('width', '100%');
   	});
		// zoomFunc();
	});
	$(document).ready(function() {
		const year = new Date().getFullYear();
		$('#copyright-text').html('&copy; ' + year + ' by Matthew Jaskiewicz')

		function showpanel(el) {
			$(el).addClass('fadeIn fadeInUp animated-fast');
		}
		setTimeout(function() {
			$('#music-symbol').addClass('fadeIn fadeInUp animated-fast');
		}, 300);
		setTimeout(function() {
			$('#choral-arrangements-heading').addClass('fadeIn animated');
		}, 300);
		$('.line1').addClass('fadeInLeft animated-fast');
		setTimeout(function() {
			$('.line2').addClass('fadeInLeft animated-fast');
		}, 200);
		setTimeout(function() {
			$('.line3').addClass('fadeInLeft animated-fast');
		}, 300);
		setTimeout(function() {
			$('.line4').addClass('fadeInLeft animated-fast');
		}, 400);
		setTimeout(function() {
			$('.line5').addClass('fadeInLeft animated-fast');
		}, 500);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[0]));
		}, 200);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[1]));
		}, 300);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[2]));
		}, 400);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[3]));
		}, 500);
		// setTimeout(function() {
		// 	showpanel($('.show-more-arrangements'));
		// }, 200);
		setTimeout(function() {
			showpanel($('.search-box-wrapper'));
		}, 700);
		$('.arrangements-page .song-card').each(function(i, el) {
			setTimeout(function() {
				showpanel(el);
			}, (200*i));
		});
	});	
	$('.js-fullheight').css('height', $(window).height());
	$('.modal iframe').css('height', $(window).height() - 250);
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};
	var lang = getUrlParameter("lang")
	$(".biography").hide()
	$("#about-page .toggle-language a").removeClass('active');
	if(lang === "pol") {
		$("#about-page .toggle-language a#polish-toggle").addClass('active');
		$(".biography.bio-english").appendTo(".biography.bio-polish");
		$(".bio-polish").show()
	} else {
		$("#about-page .toggle-language a#english-toggle").addClass('active');
		$(".biography.bio-polish").appendTo(".biography.bio-english");
		$(".bio-english").show()
	}
	$('#about-page .toggle-language a').hover(function() {
		$('#about-page .toggle-language a').removeClass('active');
	});
	$('#about-page .toggle-language a').mouseleave(function() {
		if(lang == "pol") {
			$("#about-page .toggle-language a#polish-toggle").addClass('active');
		} else {
			$("#about-page .toggle-language a#english-toggle").addClass('active');
		}
	});


	// $('#fh5co-header .display-tc').css('padding-top', $('.fh5co-nav').height() + 32);

	// var swiper = new Swiper(".mySwiper", {
	// slidesPerView: 1,
	// spaceBetween: 30,
	// loop: true,
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },
	// });
	// $(document).ready(function() {
	// 	$("#bg-video").get(0).play()
	// });
	// $('.btn-polish').click(function () {
	// 	console.log
	// 	$('#polish-about-me').hide()
	// 	$('#english-about-me').show()
	// });
	// $('.btn-english').click(function () {
	// 	$('#english-about-me').hide()
	// 	$('#polish-about-me').show()
	// });
	// $('.js-fullheight').css('height', $(window).height());
	// year = new Date().getFullYear()	
	// $('#copyright-text').html('&copy; ' + year + ' by Matthew Jaskiewicz')

	// Arrangement song cards
	var x = 0
	  var songs_data = [
		{
			"artist": "Adam Kowalski",
			"title": "Morze, nasze morze/Sea, our Sea",
			"song_url": "audio/Morze final trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Morze - SATB and Piano Score",
					"type": "VISIBLE",
					"id": "1koNOD4RrqWfwWS7b6NiCAwS0g9OywtGY"
				},
				{
					"name": "Youtube video for music sheets",
					"type": "YOUTUBE",
					"id": "FOZSQbFSDo4"
				}
			]
		},
		{
			"artist": "Michal Kleofas Oginski",
			"title": "Polonez Pożegnanie Ojczyzny/Farewell Polonaise",
			"song_url": "audio/Oginski Polonaise - trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Polonaise - Full Orchestral Score",
					"type": "VISIBLE",
					"id": "169X1J_M6Cmi7Yr3BSFiXqahGsDrhf5sM"
				},
			]
		},
		{
			"artist": "Ksawery Pomian-Lubinski",
			"title": "Jeszcze jeden mazur dzisiaj/The Last Mazurka",
			"song_url": "audio/Ksawery Pomian-Lubinski - Jeszcze jeden mazur dzisiaj - Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Jeszcze jeden mazur dzisiaj - Vocal and Piano Score",
					"type": "VISIBLE",
					"id": "1bil2yG0L13IQCBxYhR2P8gJxhixTsjEO"
				},
			]
		},
		{
			"artist": "Tadeusz Sygietynski",
			"title": "Ukochany Kraj/My Beloved Country",
			"song_url": "audio/Ukochany final vocal, piano - Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Ukochany Kraj Full Orchestral Score",
					"type": "VISIBLE",
					"id": "1b_ljE_NAVZjwV5HokVPwtVE-oAXS5xj5"
				},
				{
					"name": "Ukochany Kraj Vocal Piano Score",
					"type": "VISIBLE",
					"id": "1PsZaP5MohII_PqoovePynByJiGcmLmPc"
				},
				{
					"name": "Ukochany Kraj Orchestral Parts",
					"type": "PROTECTED",
					"id": "contact.html"
				},
			]
		},
		{
			"artist": "Kompozytor nieznany/Anonymous",
			"title": "Bywaj dziewcze zdrowe/Fare you well, my sweetheart",
			"song_url": "audio/Unknown - Bywaj dziewcze zdrowe - Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Bywaj dziewcze zdrowe Vocal Piano Score",
					"type": "VISIBLE",
					"id": "19bnlVKK4DIn70D6-Z00EVkHPgETGANwl"
				},
			]
		},
		{
			"artist": "Autor nieznany/Anonymous",
			"title": "Wezme ja kontusz/I put on my camisole",
			"song_url": "audio/Wezme ja kontusz final with piano - Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Wezme ja kontusz Vocal Piano Score",
					"type": "VISIBLE",
					"id": "1I0oWSBTozDpUndyBPr6KbOANL6l42Vkg"
				},
			]
		},
		{
			"artist": "Mariusz Gabrych",
			"title": "Bo wszyscy Polacy to jedna rodzina/All Poles are one family",
			"song_url": "audio/Bo wszyscy Polacy.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Bo wszyscy Polacy Full Orchestral Score",
					"type": "VISIBLE",
					"id": "1u6cFaRWsg0exk-eP14Xop9pKNyOt3Gco"
				},
				{
					"name": "Bo wszyscy Polacy Choir Piano Score",
					"type": "VISIBLE",
					"id": "1WIms3Gb5WmpdJXuSb-OM5bFVkiZ_8oGC"
				},
				{
					"name": "Bo wszyscy Polacy Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Jozef Wybicki",
			"title": "Polski Hymn Narodowy/Polish National Anthem",
			"song_url": "audio/Hymn Polski full orch - trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Polski Hymn Narodowy Small Orchestral Score",
					"type": "VISIBLE",
					"id": "1p9N50A7X2bmOaFb3X1fiZtCBcqXGVmXs"
				},
				{
					"name": "Polski Hymn Narodowy Full Orchestral Score",
					"type": "VISIBLE",
					"id": "1Qulod_QS8Rn22wQ-2K2angPzTwTLJgXo"
				},
				{
					"name": "Polski Hymn Narodowy Full Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Bogusław Paleczny",
			"title": "Ballada o Sw.Jozefie/Song of St. Joseph",
			"song_url": "audio/Ballada O Sw Jozefie D minor - trimmed.mp3",
			"type": "POLISH_CHURCH",
			"files": [
				{
					"name": "Ballada Piano Vocal Score",
					"type": "VISIBLE",
					"id": "1O4-F4jFfAdnE0vPK8r1Npj0KgQI6llLq"
				},
				{
					"name": "Ballada Full Orchestral Score",
					"type": "VISIBLE",
					"id": "1q7-HG_1cZP3TR1bqkx4q2KAZ7gPyXVc4"
				},
				{
					"name": "Ballada Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},


		{
			"artist": "Józef Las",
			"title": "Nie bylo miejsca/There is no room for you",
			"song_url": "audio/Józef Las -  Nie bylo miejsca w choir, orch S solo - Timmed (1).mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Nie bylo miejsca Piano Vocal Score",
					"type": "VISIBLE",
					"id": "1Gbt2248PRJemPT8x7ZGGYx51YcK-V5oR"
				},
				{
					"name": "Nie bylo miejsca Orchestral Score",
					"type": "VISIBLE",
					"id": "1TBd9QvtTNlNHZtjCPSIUkGZFwwfo2nGa"
				},
				{
					"name": "Nie bylo miejsca Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Polish Traditional",
			"title": "Hej, w dzień Narodzenia/Hey, on this day",
			"song_url": "audio/Hej, OK - w dzien narodzenia full score, jan 2025 Trimmed.mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Hej, w dzień Narodzenia Piano Vocal Score",
					"type": "VISIBLE",
					"id": "1BqBxDLlHs-0hnUgTnl4pLQwPHUlXfj4L"
				},
				{
					"name": "Hej, w dzień Narodzenia Full Orchestral Score",
					"type": "VISIBLE",
					"id": "1ddu2dhI7DRFZZSnZDS6GS4qKE9SvoxDD"
				},
				{
					"name": "Hej, w dzień Narodzenia Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Thomas Mcintyre",
			"title": "My Chcemy Boga/We need God",
			"song_url": "audio/My chcemy Boga Feb 2025 - Trimmed.mp3",
			"type": "POLISH_CHURCH",
			"files": [
				//{
					//"name": "Nie bylo miejsca Piano Vocal Score",
					//"type": "VISIBLE",
					//"id": "1Gbt2248PRJemPT8x7ZGGYx51YcK-V5oR"
				//},
				{
					"name": "My Chcemy Boga Choir Orchestral Score",
					"type": "VISIBLE",
					"id": "1TBd9QvtTNlNHZtjCPSIUkGZFwwfo2nGa"
				},
				{
					"name": "My Chcemy Boga Choir Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Thomas Mcintyre",
			"title": "My Chcemy Boga/We need God",
			"song_url": "audio/My chcemy Boga Feb 2025 - Trimmed.mp3",
			"type": "INTERNATIONAL_CHURCH",
			"files": [
				//{
					//"name": "Nie bylo miejsca Piano Vocal Score",
					//"type": "VISIBLE",
					//"id": "1Gbt2248PRJemPT8x7ZGGYx51YcK-V5oR"
				//},
				{
					"name": "My Chcemy Boga Choir Orchestral Score",
					"type": "VISIBLE",
					"id": "1TBd9QvtTNlNHZtjCPSIUkGZFwwfo2nGa"
				},
				{
					"name": "My Chcemy Boga Choir Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Unknown",
			"title": "Maple Leaf Forever",
			"song_url": "audio/Maple Leaf full orchmusx - Trimmed.mp3",
			"type": "INTERNATIONAL_SECULAR",
			"files": [
				{
					"name": "Maple Leaf Full Orchestral Score",
					"type": "VISIBLE",
					"id": "16fxfkGeQuoFK1_hw-Wf7ymmI0-FInz5e"
				},
				{
					"name": "Maple Leaf Vocal Piano Score",
					"type": "VISIBLE",
					"id": "1QnH0VinFYYri5uSrnkeQUoZms7EJpKUR"
				},
				{
					"name": "Maple Leaf Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},

		{
			"artist": "attr. Fryderyk Chopin",
			"title": "Witaj Majowa Jutrzenko/Welcome May's Dawn",
			"song_url": "audio/F.Chopin_R.Kaleta_ - Witaj Majowa Jutrzenko - Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				//{
				//	"name": "Maple Leaf Full Orchestral Score",
				//	"type": "VISIBLE",
				//	"id": "16fxfkGeQuoFK1_hw-Wf7ymmI0-FInz5e"
				//},
				{
					"name": "Witaj Majowa Jutrzenko Vocal Piano Score",
					"type": "VISIBLE",
					"id": "1BMtxDvQtg4mFm5OgR6990-Z0TaBuu807"
				},
				//{
				//	"name": "Maple Leaf Orchestral Parts",
				//	"type": "PROTECTED",
				//	"url": ""
				//},
			]
		},
		{
			"artist": "Franz Gruber",
			"title": "Silent Night/Cicha noc",
			"song_url": "audio/Franz_Gruber__Silent_Night_Cicha_Nocmp3.mp3",
			"type": ["INTERNATIONAL_CHURCH", "CHRISTMAS"],
			"files": [
				{
					"name": "Silent Night Piano Vocal Score",
					"type": "VISIBLE",
					"id": "1p_AG0pbzmpicd1j0ioXoF0XDodZSpl2j"
				},
				{
					"name": "Full Orchestral Score",
					"type": "VISIBLE",
					"id": "1sQSE0Gy-DyMLVwniU1CMrFW3J1VkCDb6"
				},
			]
		},
		{
			"artist": "Kazimierz Hofman",
			"title": "Spiew Wloscian Krakowskich/Peasants' Song",
			"song_url": "audio/K.Hofman - Spiew Wloscian krakowskich_Peasants' Song.Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Spiew Wloscian Krakowskich/Peasants' Song - Vocal and Piano Score",
					"type": "VISIBLE",
					"id": "1wD6eg96GVJqrDfb1PX3_scfQ0BHOxFY_"
				},
				{
					"name": "Spiew Wloscian Krakowskich/Peasants' Song - Vocal and Piano Scrolling Score",
					"type": "YOUTUBE",
					"id": "6WZM3_1KdVc"
				},
				//{
				//	"name": "Polski Hymn Narodowy Full Orchestral Parts",
				//	"type": "PROTECTED",
				//	"url": ""
				//},
			]
		},
		{
			"artist": "Jerzy Perersburski",
			"title": "Czy pani mieszka sama/Do you live alone?",
			"song_url": "audio/J. Perersburski - Czy pani mieszka sama _Do you live alone - trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Czy pani mieszka sama /Do you live alone? - Full Orchestral Score",
					"type": "VISIBLE",
					"id": "11N2wkPjCvHRiPnCKMvOHRuMiQgRyUJDo"
				},
				{
					"name": "Czy pani mieszka sama /Do you live alone? - Vocal and Piano Score",
					"type": "VISIBLE",
					"id": "1MIBpemxZGeOm3pn-cFfcv18OzDhtIixN"
				},
				{
					"name": "Polski Hymn Narodowy Full Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Jerzy Wasowski",
			"title": "Piosenka jest dobra/A Song is Good for Everything",
			"song_url": "audio/J.Wasowski - Piosenka jest dobra_A Song is Good for Everything-  Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Piosenka jest dobra/A Song is Good for Everything - Vocal and Piano Score",
					"type": "VISIBLE",
					"id": "1MIBpemxZGeOm3pn-cFfcv18OzDhtIixN"
				},
			]
		},
		{
			"artist": "Jerzy Petersburski",
			"title": "Tango Milonga",
			"song_url": "audio/J.Petersburski - Tango Milonga - Trimmed",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Tango Milonga - Small Orchestral and Vocal Score",
					"type": "VISIBLE",
					"id": "1tDF5l-_fz8sXXOj_Ogd5dMRdnY68ZvVK"
				},
				{
					"name": "Tango Milonga - Vocal and Piano Score",
					"type": "VISIBLE",
					"id": "1KHPkHag6BfaYVVpPyFRGeloMHPYIpH1e"
				},
				{
					"name": "Tango Milonga - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Johann Sebastian Bach",
			"title": "Bouree in D",
			"song_url": "audio/Bach Bourree in D June  2025 trimmed.mp3",
			"type": "INTERNATIONAL_SECULAR",
			"files": [
				{
					"name": "Bach Bourree in D - Vocal and Double Bass Score",
					"type": "VISIBLE",
					"id": "1R7ckiNgczAxMA_EsvJiwYQBBjBkukIaZ"
				},
				//{
					//"name": "Maple Leaf Vocal Piano Score",
					//"type": "VISIBLE",
					//"id": "1gl9cpXUFtLT8t0ozaaUsBspiM-Nnqhjj"
				//},
				//{
					//"name": "Maple Leaf Orchestral Parts",
					//"type": "PROTECTED",
					//"url": ""
				//},
			]
		},
		{
			"artist": "Karol Dąbrowski",
			"title": "Ojczyzno ma/My Fatherland",
			"song_url": "audio/Ojczyzno ma - voc,fl,piano 20252 trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Ojczyzno ma/My Fatherland - Vocal, Flute, Piano Score",
					"type": "VISIBLE",
					"id": "1l_5LlUrP6cPAOfnwJxshNQ9ITSmBp6xe"
				},
				//{
					//"name": "Maple Leaf Vocal Piano Score",
					//"type": "VISIBLE",
					//"id": "1gl9cpXUFtLT8t0ozaaUsBspiM-Nnqhjj"
				//},
				//{
					//"name": "Maple Leaf Orchestral Parts",
					//"type": "PROTECTED",
					//"url": ""
				//},
			]
		},
		{
			"artist": "Waclaw Bojarski",
			"title": "Natalia",
			"song_url": "audio/Natalia.new, full orch - Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Natalia - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1gEVK-gPP26i8B22d0Xbdg_4p68e2PsKX"
				},
				//{
					//"name": "Natalia - Choir Piano Score",
					//"type": "VISIBLE",
					//"id": "13e4N5PBJlx82qNpDZ0Y-EXkbys8AvKbH"
				//},
				{
					"name": "Natalia - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Krystyna Krahelska",
			"title": "Smutna Rzeka/Blue River",
			"song_url": "audio/Smutna rzeka Aug 5 corrected full new - Trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Blue River - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1ugmL2Oq0qEWOnpvQFJN9AqTjD5uh89rc"
				},
				//{
					//"name": "Blue River - Choir Piano Score",
					//"type": "VISIBLE",
					//"id": "1JimBje_pmrftzNt3V9s42Ix8YVUzeG0A"
				//},
				{
					"name": "Blue River - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Andrzej Panufnik",
			"title": "Warszawskie Dzieci/Warsaw's Children",
			"song_url": "audio/Warszawskie dzieci August 26, 2025 full score - trimmed.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "Warsaw's Children - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1u1Tv9Uy6wb27SAg7AAX53EJ85UqijXT2"
				},
				//{
					//"name": "Warsaw's Children - Choir Piano Score",
					//"type": "VISIBLE",
					//"id": "12HAOv4MM9e8SOldOwVv_Nqj8ViBsda_R"
				//},
				{
					"name": "Warsaw's Children - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Book of 8 Carols",
			"title": "Hushabye, Jesu Sweet",
			"song_url": "audio/Hashabye, Lulajze, Jezuniu, Oct 24 2025 - Trimmed.mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Lulajze, Jezuniu - pełna partytura orkiestrowa",
					"type": "VISIBLE",
					"id": "1xlqPcUO9Vy4mGgKizAiS3akTJJuWd2XA"
				},
				{
					"name": "Hushabye, Jesu Sweet - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1s_-WyLPwpbzqLWSyWzp3Xg5CbBFU6TMB"
				},
				{
					"name": "Lulajze, Jezuniu / Hushabye, Jesu Sweet - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Book of 8 Carols",
			"title": "Brothers, Look Ye Upwards / Bracia, patrzcie jeno",
			"song_url": "audio/Brothers, Sep 16 English correct 2025 - Trimmed.mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Bracia, patrzcie jeno - pełna partytura orkiestrowa",
					"type": "VISIBLE",
					"id": "1QzsKupBcWPE4XMX1MiklF1TrsGecp8fu"
				},
				{
					"name": "Brothers, Look Ye Upwards - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1rNbfLlWPP7o3K-l3-cXr8N9fu7Ud_Vg2"
				},
				{
					"name": "Brothers, Look Ye Upwards - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Book of 8 Carols",
			"title": "Gdy śliczna Panna / When Lovely Mary",
			"song_url": "audio/When Lovely Mary Eng Trimmed.mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Gdy śliczna Panna - pełna partytura orkiestrowa",
					"type": "VISIBLE",
					"id": "12MY7jPN9_LBuU55KDmz68c7_zDxLaJUG"
				},
				{
					"name": "When Lovely Mary - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1_OiiznzjwimQdRhjNZHgAdYZA8tvxt3L"
				},
				{
					"name": "Gdy śliczna Panna / When Lovely Mary - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Book of 8 Carols",
			"title": "Bog sie rodzi / 'God is Born'",
			"song_url": "audio/God is Born final Nov 21 - Trimmed.mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Bog sie rodzi - pełna partytura orkiestrowa",
					"type": "VISIBLE",
					"id": "1q_7AWadzzPPE4imLGdgqdK0ef7uMdUds"
				},
				{
					"name": "'God is Born' - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1NscZg0P9ISALTvaX1YAA2OpkACa5zz7q"
				},
				{
					"name": "Bog sie rodzi / 'God is Born' - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Book of 8 Carols",
			"title": "Mizerna cicha / How still and Tiny",
			"song_url": "audio/How still mp3 Dec 5 2025 - Trimmed.mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Mizerna cicha - pełna partytura orkiestrowa",
					"type": "VISIBLE",
					"id": "1BPwO9aPfd8fpzwKM9Y0vkRNHC6nP66au"
				},
				{
					"name": "How Still and Tiny - Full Orchestra Score",
					"type": "VISIBLE",
					"id": "1fXFDUOvq-XXJg7UHxgHDGKyZVVcIQQOA"
				},
				{
					"name": "Mizerna cicha / How still and Tiny - Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"artist": "Book of 8 Carols",
			"title": "Tryumfy Króla Niebieskiego / Triumphs of the Heavenly King",
			"song_url": "audio/Tryumfy  in D Dec 2024 final - trimmed.mp3",
			"type": "CHRISTMAS",
			"files": [
				{
					"name": "Tryumfy Piano Vocal Score",
					"type": "VISIBLE",
					"id": "1jE7sF2jyRdmnFljtu49ON49xUcVuId-X"
				},
				{
					"name": "Tryumfy Full Orchestral Score",
					"type": "VISIBLE",
					"id": "1T4V-KbK3SexcIOtF-dlzLDDgG_sgklZm"
				},
				{
					"name": "Tryumfy Orchestral Parts",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
	  ]

	  function getActiveTabSongs() {
		var active_tab = $(".arrangement-nav .active span").text();
		var newSongsData = [];
	  
		for (var i = 0; i < songs_data.length; i++) {
		  var song_type = songs_data[i]["type"];
	  
		  // normalize: ensure song_type is always an array
		  if (!Array.isArray(song_type)) {
			song_type = [song_type];
		  }
	  
		  if (active_tab === "Polish Secular Music" && song_type.includes("POLISH_SECULAR")) {
			newSongsData.push(songs_data[i]);
		  } 
		  else if (active_tab === "Polish Church Music" && song_type.includes("POLISH_CHURCH")) {
			newSongsData.push(songs_data[i]);
		  } 
		  else if (active_tab === "International Secular Music" && song_type.includes("INTERNATIONAL_SECULAR")) {
			newSongsData.push(songs_data[i]);
		  } 
		  else if (active_tab === "International Church Music" && song_type.includes("INTERNATIONAL_CHURCH")) {
			newSongsData.push(songs_data[i]);
		  } 
		  else if (active_tab === "Christmas Music" && song_type.includes("CHRISTMAS")) {
			newSongsData.push(songs_data[i]);
		  }
		}
	  
		return newSongsData;
	  }
	  

	  function getSearchMatchingSongs() {
			$('.alert-no-arrangements-found').hide();
			$('.arrangement-nav').hide();
			var textsearch = $('#search-box').val().toLowerCase()
			if(textsearch === "") {
				$('.arrangement-nav').show();
				$('.alert-arrangements-found').hide();
				return getActiveTabSongs();
			}
			$('.alert-arrangements-found').show();
			$('.alert-arrangements-found span#entered-search-text').html(textsearch);
			// var currentTabSongs = getActiveTabSongs();

			var currentTabSongs = songs_data;
			var newSongsData = [];
			for(var i=0; i<currentTabSongs.length; i++) {
				if(currentTabSongs[i]["title"].toLowerCase().indexOf(textsearch) >=0 || currentTabSongs[i]["artist"].toLowerCase().indexOf(textsearch) >=0) {
					newSongsData.push(currentTabSongs[i]);
				}
			}
			if (!newSongsData.length) {
				// $('.alert-arrangements-found').hide();
				$('.alert-no-arrangements-found').show();
			}
			return newSongsData;
	  }

	  function buildSongCards(songs_data) {
		var total_song_cards = $('.song-card').length;
		var count = 0
		if (!total_song_cards) {
			$('.panel-group.arrangements-page').html('');
		}
		var i;
		for (i=total_song_cards; i<songs_data.length; i++) {
			if(count == 10) {
				$(".show-more-arrangements").removeClass('animated-fast fadeInUp').show()
				return;
			}
			var visible_files = [];
			var protected_files = [];
			var youtube_files = [];
			var visible_music_sheets = '';
			var protected_music_sheets = '';
			var youtube_music_sheets = '';
			var collapse_in = '';
			var collapsed_flag = '';

			var song_name = songs_data[i]["title"];
			var artist_name = songs_data[i]["artist"];
			var song_url = songs_data[i]["song_url"];
			var files = songs_data[i]["files"];
			for (var j=0; j<files.length; j++) {
				if(files[j]["type"] === "VISIBLE") {
					visible_files.push(files[j]);
				}
				else if(files[j]["type"] === "PROTECTED") {
					protected_files.push(files[j]);
				}
				else if (files[j]["type"] == "YOUTUBE") {
					youtube_files.push(files[j]);
				}
			}
			if(visible_files) {
				for(var j=0; j<visible_files.length; j++) {
					file_name = visible_files[j]["name"];
					var file_id = visible_files[j]["id"];
					visible_music_sheets = visible_music_sheets + '<div class="row btn-view-music-sheet" data="' + file_id + '" data-toggle="modal" data-target="#myModal"><div class="col-md-11 col-sm-11 col-xs-11 music-sheet"><span>' + file_name + '</span></div><div class="col-md-1 col-sm-1 col-xs-1 view-music-sheet"><a href="#" onclick="return false;" data="' + file_id + '" class="btn-view-music-sheet-img" title="View Music Sheet" alt="Music Sheet"><img src="images/music-sheet.png"/></a></div></div>';
				}
			}
			if(protected_files) {
				for(var j=0; j<protected_files.length; j++) {
					var file_name = protected_files[j]["name"];
					protected_music_sheets = protected_music_sheets + '<div class="row"><a href="mailto:matthew.jaskiewicz@gmail.com" class="btn-paid-music-sheet"><div class="col-md-11 col-sm-11 col-xs-11 music-sheet"><span>' + file_name + '</span></div><div class="col-md-1 col-sm-1 col-xs-1 view-music-sheet"><img src="images/mail.png"/></div></a></div>';
				}
			}
			if(youtube_files) {
				for(var j=0; j<youtube_files.length; j++) {
					file_name = youtube_files[j]["name"];
					var file_id = youtube_files[j]["id"];
					youtube_music_sheets = youtube_music_sheets + '<div class="row btn-view-music-sheet" type="video" data="' + file_id + '" data-toggle="modal" data-target="#myModalVideo"><div class="col-md-11 col-sm-11 col-xs-11 music-sheet"><span>' + file_name + '</span></div><div class="col-md-1 col-sm-1 col-xs-1 view-music-sheet"><a href="#" onclick="return false;" data="' + file_id + '" class="btn-view-music-sheet-img" title="View Music Sheet" alt="Music Sheet"><img src="images/youtube-icon.png"/></a></div></div>';
				}
			}
			if(count === 0 && !total_song_cards) {
				collapse_in = 'in';
			}
			else {
				collapsed_flag = 'collapsed';
			}
			var song_card = '<div class="panel panel-default song-card animate-box fadeIn"><div class="panel-heading ' + collapsed_flag + '" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + count + '"><h4 class="panel-title"><div class="container-flex"><div class="row"><div class="col-md-6 col-sm-12 song-name"><span class="artist">' + artist_name + '</span><span class="song">' + song_name + '</span></div><div class="col-md-5 col-sm-12 audio-player"><audio controls><source src="' + song_url + '" type="audio/mpeg">Your browser does not support the audio element.</audio></div><div class="col-md-1 col-sm-12 expand"><a class="collapse-arrow ' + collapsed_flag + '"><img src="images/down-arrow.png"/></a></div></div></div></h4></div><div id="collapse' + i + '" class="panel-collapse collapse ' + collapse_in + '" role="tabpanel" aria-labelledby="headingOne"><div class="panel-body">' + visible_music_sheets + protected_music_sheets + youtube_music_sheets + '</div></div></div>';
			$(".panel-group").append(song_card);
			count++;
		}
		if(i == songs_data.length) {
			$('.show-more-arrangements').hide();
		}
	  }

	  buildSongCards(getActiveTabSongs());

		jQuery('#search-box').on('input', function() {
			$('.panel-group').html('');
			var newSongsData = getSearchMatchingSongs();
			buildSongCards(newSongsData);
			$('.song-card').each(function(i) {
				var x = $(this)
				setTimeout(function() {
					$(x).addClass('animated-fast fadeInUp');
				}, 100*i);
			});
		});
		$('a#clear-search-arrangements').click(function() {
			$('#search-box').val('');
			$('.panel-group').html('');
			$('.arrangement-nav').show();
			$('.alert-arrangements-found').hide()
			$('.alert-no-arrangements-found').hide();
			buildSongCards(getActiveTabSongs());
			contentWayPoint();
		});

		$('.arrangement-nav .menu-item').click(function() {
			$('#search-box').val('');
			$('.arrangement-nav .menu-item.active').removeClass('active');
			$(this).addClass('active');
			$(".panel-group").html('')
			buildSongCards(getActiveTabSongs());
			contentWayPoint();
		});

		$('.panel-group').on("click", ".btn-view-music-sheet", function() {
			var type = $(this).attr('type');
			var file_id = $(this).attr('data');
			if(type == "video") {
				var url = "https://www.youtube.com/embed/" + file_id
				$('.video-modal.modal .modal-body').html('<iframe src="" width="100%" height="100%" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
				$('.video-modal.modal .modal-body iframe').attr('src', url);
				$('.modal iframe').css('height', $(window).height() - 250);
				return true
			}
			var file_id = $(this).attr('data');
			var url = 'https://drive.google.com/file/d/' + file_id  + '/preview';
			$('.modal .modal-body iframe').attr('src', url);
			url = 'https://drive.google.com/uc?export=download&id=' + file_id;
			$('.modal .modal-footer .btn-success').attr('href', url);
		});

		$('.video-modal-close').click(function() {
			$('.video-modal.modal .modal-body').html('<iframe src="" width="100%" height="100%" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
		});

		$('.show-more-arrangements').click(function() {
			buildSongCards(getSearchMatchingSongs());
			contentWayPoint();
		})

		$('#about-page .toggle-language a').click(function() {
			$('#about-page .toggle-language a').removeClass('active');
			$(this).addClass('active');
		});

		$(".panel-group").on("click", '.btn-paid-music-sheet', function() {
			$("body").css("cursor", "wait");
			$(this).css("cursor", "wait");
			setTimeout( function(){
				$("body").css("cursor", "default");
				$(".btn-paid-music-sheet").css("cursor", "pointer");
			},1000);
		});
		$(".modal .btn-success").click(function () {
			$("body").css("cursor", "wait");
			$(this).css("cursor", "wait");
			setTimeout( function(){
				$("body").css("cursor", "default");
				$(".modal .btn-success").css("cursor", "pointer");
			},1000);
		})
		$(".panel-group").on("click", ".panel-heading", function() {
			var flag = $(this).hasClass("collapsed");
			$(".panel-heading").find(".collapse-arrow").removeClass("collapsed");
			$(".panel-heading").find(".collapse-arrow").addClass("collapsed");
			$(".panel-heading").removeClass("collapsed");
			$(".panel-heading").addClass("collapsed");
			if(flag) {
				$(this).find(".collapse-arrow").removeClass("collapsed");
			} else {
				$(this).find(".collapse-arrow").addClass("collapsed");
			}

		})
}());
