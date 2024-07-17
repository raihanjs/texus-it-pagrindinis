$(document).ready(function () {
  // Mobile Menu btn
  $(".mobile-menu").click(function () {
    $(".main-menu").toggleClass("menu-right");
  });
  // News Slider
  $(".news-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".news__prev-arrow"),
    nextArrow: $(".news__next-arrow"),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Partners Slider
  $(".partners-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".partners__prev-arrow"),
    nextArrow: $(".partners__next-arrow"),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
