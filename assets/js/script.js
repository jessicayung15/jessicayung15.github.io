$(".ingredients-slider-indicator").click(function () {
  var index = $(this).index();
  $(this).parents("#ingredients-slider").find(".slider-item").removeClass("active");
  $(this).parents("#ingredients-slider").find(".slider-item").eq(index).addClass("active");

  $(this).parents("#ingredients-slider").find(".ingredients-slider-indicator").removeClass("active");
  $(this).parents("#ingredients-slider").find(".ingredients-slider-indicator").eq(index).addClass("active");
});
