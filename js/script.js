$(function() {
  "use strict"; // Start of use strict
    var navbarShrink = $('.navbar');
    $(window).scroll(function () {
        if (navbarShrink.offset().top > 50) {
            navbarShrink.addClass("navbar-shrink");
            $(".navbar-nav li").addClass("hvr-underline-from-center");

        } else {
            navbarShrink.removeClass("navbar-shrink");
            $(".navbar-nav li").removeClass("hvr-underline-from-center");
        }
    }).scroll();

    $(function() {
        $('.scroll-down').click (function() {
          $('html, body').animate({scrollTop: $('section#about').offset().top }, 'slow');
          return false;
        });
      });
     var teamShow = $(".team-show .owl-carousel");
    $(teamShow).owlCarousel({
        items:4,
        nav:true,
        dots:false,
        loop:true,
        smartSpeed: 2000,
        autoplay: true,
        autoplayHoverPause:true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            769:{
                items:2
            },
            991:{
                items:3
            },
            1199:{
                items:4
            }
        }
    });
}); // End of use strict
