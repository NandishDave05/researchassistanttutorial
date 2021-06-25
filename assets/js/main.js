// ---------------------------------------
// Custom JS
// ---------------------------------------

// Preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

// Init Fastclick
$(function() {
    FastClick.attach(document.body);
});

// -----------------------------
// Navbar fade
// -----------------------------
$(function() {
    var navbar = $('.navbar');
    if (navbar.hasClass("is-transparent")) {
        $(window).scroll(function() {
            if (navbar.offset().top > 250) {
                navbar.removeClass("is-transparent");
            } else {
                navbar.addClass("is-transparent");
            }
        });
    } else {
        return;
    }
});

// -----------------------------
//  Smooth scroll
// ----------------------------
$(document).ready(function() {
    $('.navbar-nav li a, .banner a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// -----------------------------
//  CSS3 Transition
// -----------------------------
$('*').each(function(){
	if($(this).attr('data-animation')) {
		var $animationName = $(this).attr('data-animation'),
			$animationDelay = "delay-"+$(this).attr('data-animation-delay');
		$(this).appear(function() {
			$(this).addClass('animated').addClass($animationName);
			$(this).addClass('animated').addClass($animationDelay);
		});
	}
});

//Carousel for tweets
$('.tweet_list').slick({  
    fade: true,
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000
});

// -----------------------------
// Slick
// -----------------------------

$('.slider').slick({
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000
});

//Quotes
$('.quote-list').slick({
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false
});

//Brands
$('.brands').slick({
  slide: 'ul>li',
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// -----------------------------
// Isotope filtering
// -----------------------------
$(function(){
    var $container = $('.isotope');
    // init
    $container.imagesLoaded( function() {
        $container.isotope({ 
            itemSelector: ".item",
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer"
            }
        });
    });
    // filter items when filter link is clicked
    $('#filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});

// -----------------------------
// Masonry /Blog List/
// ----------------------------
$(function(){
    var $masonry = $('#list-masonry');
    // init
    $masonry.imagesLoaded( function() {
        $masonry.isotope({ 
            itemSelector: "#list-masonry>div",
            masonry: {
                columnWidth: "#list-masonry>div"                
                }
        });
    });    
});

// -----------------------------
// Count To
// -----------------------------
$('.number').appear(function() {
    $('.number').countTo();
});

// -----------------------------
// Magnific Popup
// -----------------------------
$('.ajax-popup-link').magnificPopup({
    type: 'ajax',
    midClick: true,
    closeBtnInside: true,
    showCloseBtn: false,
    preloader: true,
    fixedContentPos: false,
    gallery: {
        enabled: true,
        arrowMarkup: '',
        preload: [1,2]
    },
    callbacks: {
        ajaxContentAdded: function() {
            // Slider in popup
            $('.popup-slider').slick({
                slide: 'ul>li',
                dots: true,
                arrows: false,
                customPaging: function(slick,index) {
                    return '<a>' + ++index + '</a>';
               },
               onInit: function() {
                   // same height for popup-slider and project-wrap
                    var $equalizer = $('.equalizer');
                    var maxHeight = 0;
                    $equalizer.each(function() {
                        maxHeight = Math.max(maxHeight, $(this).outerHeight());
                    });
                    $equalizer.css({ height: maxHeight + 'px' });
               }
            });
            this.content.find('.fa-close').on('click',function(e){
                e.preventDefault();
                $.magnificPopup.close();
            });
        },
        buildControls: function () {
            var magnificPopup = $.magnificPopup.instance;
            $('body').on('click', '.fa-angle-double-left', function() {
                magnificPopup.prev();
            });
            $('body').on('click', '.fa-angle-double-right', function() {
                magnificPopup.next();
            });            
        },        
        close: function() {
            console.log('Close');
        }
    }
});

// -----------------------------
// Easy Pie Chart
// -----------------------------
$('.chart').appear(function() {
    $('.chart').easyPieChart({
        barColor: "#fff",//default, set optionaly in html data-bar-color option
        trackColor: "transparent",
        //scaleColor: "#CCC",
        scaleLength: 0,
        lineCap: "square",
        lineWidth: 5,
        animate: 2000,
        onStart: function() {
            $('.percent').countTo({
                speed: 2000
            });
        }
    });
});

// -----------------------------
// call-to section
// Chrome Fix Repair
// Remove fixed background-attachment
// ----------------------------
$(function () {
    var mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
    if (mozilla == false) {
        $(".call-to").css({"background-attachment":"scroll"});
    }
});

