// Tabs
$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

// remove slider class when larger
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 500) {
      $('.examples').removeClass('swiper-container');
      $('.examples').addClass('grid');
				$('.wrapper').removeClass('swiper-wrapper');
    } else if (ww <= 500) {
      $('.examples').removeClass('grid');
      $('.examples').addClass('swiper-container');
				$('.wrapper').addClass('swiper-wrapper');
    };
  };
  $(window).resize(function(){
    alterClass();
		// Slider (swiper)
		var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 30,
				loop: true
		}); // end slider - needs to be in here to load on window sizing
  });
  //Fire it when the page first loads:
  alterClass();
});
