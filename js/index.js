// cookie
if ($.cookie("access") == undefined) {
  $.cookie("access", "onece");
  $(".wrap").css("display", "none");
  setTimeout(function() {
    $(".outer").fadeOut();
  }, 5000);
  setTimeout(function() {
    $(".wrap").fadeIn();
  }, 5000);
} else {
  $(".outer").remove();
  $(".wrap").css("opacity", "1");
}

// just size fixed of index.html top visual
$(function() {
  var hSize = $(window).height();
  var wSize = $(window).width();
  $(".outer, .wrap").height(hSize);
  $(".outer, .wrap").width(wSize);
});
$(window).resize(function() {
  var hSize = $(window).height();
  var wSize = $(window).width();
  $(".outer, .wrap").height(hSize);
  $(".outer, .wrap").width(wSize);
});
// slideShow
$(function() {
  $(".wrap-main").each(function() {
    let slides = $(this).find("img");
    let slideCount = slides.length;
    let currentIndex = 0;

    slides.eq(currentIndex).fadeIn(1700);

    setInterval(showNextSlide, 3500);

    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount;
      slides.eq(currentIndex).fadeOut(1700);
      slides.eq(nextIndex).fadeIn(1700);
      currentIndex = nextIndex;
    }
  });
});
