// Если на проекте jQuery
$( document ).ready(function() {
  $(".project-carousel").owlCarousel({
    items: 3,
    nav: false,
    autoplay: true,
    dots: false,
    mouseDrag: false,
    smartSpeed: 800,
    autoplaySpeed: 800,
    touchDrag: true,
    loop: true,
    // center: true,
    responsive : {
      0 : {
        items: 1,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 3,
      },
      1800 : {
        items: 3,
      }
    }
  });

  $('.carousel-nav.prev').on('click', function(e) {
    e.preventDefault();
    $('.project-carousel').trigger('prev.owl.carousel');
  });

  $('.carousel-nav.next').on('click', function(e) {
    e.preventDefault();
    $('.project-carousel').trigger('next.owl.carousel');
  });

});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
