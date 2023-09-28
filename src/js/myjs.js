$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5500,
    navContainer: '.main-content .custom-nav',
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
    },
  });
});
