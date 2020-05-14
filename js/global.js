// Navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      // Navigation Bar
      $('.navbar').removeClass('fadeIn');
      $('body').addClass('shrink');
      $('.navbar').addClass('animated fadeInDown');
    } else {
      $('.navbar').removeClass('fadeInDown');
      $('body').removeClass('shrink');
      $('.navbar').addClass('animated fadeIn');
    }
  });
});

// pelayanan panel > 200
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $('.pk').addClass('animated rubberBand');
      $('.p1').addClass('animated fadeInLeft');
      $('.p2').addClass('animated fadeInRight');
      $('.p3').addClass('animated fadeInLeft');
      $('.p4').addClass('animated fadeInRight');
      $('.p5').addClass('animated fadeInLeft');
    }
  });
});

// produk panel > 400
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 1100) {
      $('.kk').addClass('animated jackInTheBox');
      $('.ck1').addClass('animated rotateInUpLeft');
      $('.ck2').addClass('animated slideInUp');
      $('.ck3').addClass('animated rotateInUpRight');
    }
  });
});

// Carousel panel > 1300
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 1600) {
      $('.bd-example').addClass('animated slideInLeft');
    }
  });
});

//Testimonial


// Footer panel
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 3150) {
      $('.panel-footer').addClass('animated slideInUp');
    }
  });
});