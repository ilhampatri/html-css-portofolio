(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});
	$('.carousel').carousel({
		interval: false,
	  });
	  $('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus')
	  })
	  
	 
})(jQuery);

var contentPortalAsuradur = "Aplikasi yang digunakan oleh pihak asuransi untuk melakukan beberapa proses seperti penutupan, perpanjangan, endorsment, dan Polis";
var contentEpolis = "Aplikasi ini terdiri dari beberapa fitur yaitu penutupam, perpanjangan, endorsment, premi, generate polis, dan Klaim yang membantu untuk pembuatan Polis Asuransi";
var contentEtaksasiKJPP = "Aplikasi ini digunakan untuk pengisian detail taksasi oleh pihak KJPP ";
var contentEtaksasi = "Aplikasi ini terdiri dari beberapa fitur yaitu Pembuatan Nasabah, Agunan, Pengajuan Taksasi, Serah Terima, dan Inquiry";
var contentEsettlement = "Aplikasi untuk membantu proses settlement internal";
var contentWebNes = "Aplikasi ini menampilkan beberapa news yang diambil dari public API yg di bentuk menggunakan Framework React Js. ";
var contentResourcePlacement = "Aplikasi ini adalah aplikasi yang digunakan untuk membantu penempatan karyawan berdasrakan project dan skill.";

const titlePortalAsuradur = "Portal Asuradur";
const titleEpolis = "E-Pollis";
const titleEtaksasiKJPP = "E-Taksasi KJPP";
const titleEtaksasi = "E-Taksasi";
const titleEsettlement = "E-Settlement";
const tittleWebNews = "Web News";
const titleResourcePlacement = "Resource Placement";


const contentCarouselPortalAsuraudr = ` 
<div id="portalAsuradurContentCarousel" class="carousel slide" style="margin-top: 8px;" >
	<div class="carousel-inner">
	<div class="carousel-item active">
		<img class="d-blocks w-100" src="img/E-POLIS PORTAL ASURADUR.jpg" alt="First slide">
	</div>
	<div class="carousel-item">
		<img class="d-blocks w-100" src="img/Portofolio/Epolis Portal Asuradur/Login page.png" alt="Second slide">
	</div>
	<div class="carousel-item">
		<img class="d-blocks w-100" src="img/Portofolio/Epolis Portal Asuradur/Home page.png" alt="Third slide">
	</div>
	</div>
	<a class="carousel-control-prev" href="#portalAsuradurContentCarousel" role="button" data-slide="prev">
	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#portalAsuradurContentCarousel" role="button" data-slide="next">
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="sr-only">Next</span>
	</a>
</div>`;

const contentCarouselEpolis = `
<div id="epolisContentCarousel" class="carousel slide" style="margin-top: 8px;" >
	<div class="carousel-inner">
	<div class="carousel-item active">
		<img class="d-blocks w-100" src="img/E-POLIS.jpg" alt="First slide">
	</div>
	<div class="carousel-item">
		<img class="d-blocks w-100" src="img/Portofolio/Epolis Portal Intranet/Home page epolis.png" alt="Second slide">
	</div>
	</div>
	<a class="carousel-control-prev" href="#epolisContentCarousel" role="button" data-slide="prev">
	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#epolisContentCarousel" role="button" data-slide="next">
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="sr-only">Next</span>
	</a>
</div>`;

const contentCarouselEtaksasiKJPP = `
<div id="etaksasikjppContentCarousel" class="carousel slide" style="margin-top: 8px;" >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-blocks w-100" src="img/E-Taksasi KJPP.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-blocks w-100" src="img/Portofolio/Etaksasi KJPP/Loginpage.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-blocks w-100" src="img/Portofolio/Etaksasi KJPP/Home page.png" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#etaksasikjppContentCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#etaksasikjppContentCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>`;

const contentCarouselEtaksasi = `
<div id="etaksasiContentCarousel" class="carousel slide" style="margin-top: 8px;" >
	<div class="carousel-inner">
	<div class="carousel-item active">
		<img class="d-blocks w-100" src="img/E-Taksasi.jpg" alt="First slide">
	</div>
	<div class="carousel-item">
		<img class="d-blocks w-100" src="img/Portofolio/Etaksasi/Login page etaksasi.png" alt="Second slide">
	</div>
	<div class="carousel-item">
		<img class="d-blocks w-100" src="img/Portofolio/Etaksasi/Home page etaksasi.png" alt="Third slide">
	</div>
	</div>
	<a class="carousel-control-prev" href="#etaksasiContentCarousel" role="button" data-slide="prev">
	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#etaksasiContentCarousel" role="button" data-slide="next">
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="sr-only">Next</span>
	</a>
</div>`;
const contentCarouselEsettlement  = `
		<div id="esettlementContentCarousel" class="carousel slide" style="margin-top: 8px;" >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-blocks w-100" src="img/E-Settlement.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-blocks w-100" src="img/Portofolio/E-Settlement/Home page.png" alt="Second slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#esettlementContentCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#esettlementContentCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
`;
const contentCarouselWebNews = `
<div id="webnewsContentCarousel" class="carousel slide" style="margin-top: 8px;" >
	<div class="carousel-inner">
	<div class="carousel-item active">
		<img class="d-blocks w-100" src="img/webnews.jpg" alt="First slide">
	</div>
	<div class="carousel-item">
		<img class="d-blocks w-100" src="img/Portofolio/News React DTS/Done.gif" alt="Second slide">
	</div>
	</div>
	<a class="carousel-control-prev" href="#webnewsContentCarousel" role="button" data-slide="prev">
	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#webnewsContentCarousel" role="button" data-slide="next">
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="sr-only">Next</span>
	</a>
</div>`;
const contentCarouselResourcePlacement = `
<div id="resourceplacementContentCarousel" class="carousel slide" style="margin-top: 8px;" >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-blocks w-100" src="img/resource placement.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-blocks w-100" src="img/Portofolio/Final Project Bootcamp/Login page.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-blocks w-100" src="img/Portofolio/Final Project Bootcamp/client page.png" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-blocks w-100" src="img/Portofolio/Final Project Bootcamp/participant client page.png" alt="Fourth slide">
              </div>
              <div class="carousel-item">
                <img class="d-blocks w-100" src="img/Portofolio/Final Project Bootcamp/Participant page.png" alt="Fifth slide">
              </div>
            </div>
            <a  class="carousel-control-prev" href="#resourceplacementContentCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#resourceplacementContentCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true" ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>`;






function openView(about){
	if(about == 'portalasuradur'){
		$("#modal-content").html(contentPortalAsuradur);
		$("#exampleModalLongTitle").html(titlePortalAsuradur);
		$("#content-carousel").html(contentCarouselPortalAsuraudr);

	}
	else if(about == 'epolis'){
		$("#modal-content").html(contentEpolis);
		$("#exampleModalLongTitle").html(titleEpolis);
		$("#content-carousel").html(contentCarouselEpolis);

	}
	else if(about == 'esettlement'){
		$("#modal-content").html(contentEsettlement);
		$("#exampleModalLongTitle").html(titleEsettlement);
		$("#content-carousel").html(contentCarouselEsettlement);

	}
	else if(about == 'etaksasi'){
		$("#modal-content").html(contentEtaksasi);
		$("#exampleModalLongTitle").html(titleEtaksasi);
		$("#content-carousel").html(contentCarouselEtaksasi);

	}
	else if(about == 'etaksasikjpp'){
		$("#modal-content").html(contentEtaksasiKJPP);
		$("#exampleModalLongTitle").html(titleEtaksasiKJPP);
		$("#content-carousel").html(contentCarouselEtaksasiKJPP);

	}
	else if(about == 'webnews'){
		$("#modal-content").html(contentWebNes);
		$("#exampleModalLongTitle").html(tittleWebNews);
		$("#content-carousel").html(contentCarouselWebNews);

	}

	else if(about == 'resource'){
		$("#modal-content").html(contentResourcePlacement);
		$("#exampleModalLongTitle").html(titleResourcePlacement);
		$("#content-carousel").html(contentCarouselResourcePlacement);

	}

  };