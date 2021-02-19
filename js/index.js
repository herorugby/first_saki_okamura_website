// just size fixed of index.html top visual
$(function() {
  var hSize = $(window).height();
  var wSize = $(window).width();
  $("#ownsvg, .wrap").height(hSize);
  $("#ownsvg, .wrap").width(wSize);
});

$(window).resize(function() {
  var hSize = $(window).height();
  var wSize = $(window).width();
  $("#ownsvg, .wrap").height(hSize);
  $("#ownsvg, .wrap").width(wSize);
});


// cookie
if ($.cookie("access") == undefined) {
  $.cookie("access", "onece");
} else {
  $("svg").remove();
  $(".text").remove();
  $(".wrap").css("opacity", "1");
}


// svg animation
$(function() {
  new Vivus('ownsvg',
    {
      type: "sync",
      start: 'autostart',
      duration: 220 ,
      pathTimingFunction: Vivus.EASE_OUT
    },
    function(obj){
      obj.el.classList.add('fill');
    },
  );

// svg fadeout function
$(function() {
  $(".wrap").css("display", "none");
    setTimeout(function() {
      $("#ownsvg").fadeOut();
    }, 6000);
  });
  $(function() {
    setTimeout(function() {
      $(".wrap").css("display", "block");
      $(".wrap").animate({opacity: "1"}, 1000);
    }, 5500);
  });
});


// slideShow
$(function() {
  $(".wrap-main").each(function() {
    let slides = $(this).find("img");
    let slideCount = slides.length;
    let currentIndex = 0;

    slides.eq(currentIndex).fadeIn(1000);

    setInterval(showNextSlide, 3000);

    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount;
      slides.eq(currentIndex).fadeOut(1000);
      slides.eq(nextIndex).fadeIn(1000);
      currentIndex = nextIndex;
    }
  });
});
