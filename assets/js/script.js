$(".ingredients-slider-indicator").click(function (e) {
  e.preventDefault();
  var index = $(this).index();
  $(this).parents("#ingredients-slider").find(".slider-item").removeClass("active");
  $(this).parents("#ingredients-slider").find(".slider-item").eq(index).addClass("active");

  $(this).parents("#ingredients-slider").find(".ingredients-slider-indicator").removeClass("active");
  $(this).parents("#ingredients-slider").find(".ingredients-slider-indicator").eq(index).addClass("active");
});

$(".product-slider-indicator").click(function (e) {
  e.preventDefault();
  var index = $(this).index();
  $(this).parents("#product-details-slider").find(".product-slider-item").removeClass("active");
  $(this).parents("#product-details-slider").find(".product-slider-item").eq(index).addClass("active");

  $(this).parents("#product-details-slider").find(".product-slider-indicator").removeClass("active");
  $(this).parents("#product-details-slider").find(".product-slider-indicator").eq(index).addClass("active");
});

$("#hamburger-menu").click(function (e) {
  e.preventDefault();
  $("#mobile-menu-container").toggleClass("active");
});
