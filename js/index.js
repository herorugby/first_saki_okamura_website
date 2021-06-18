// just size fixed of index.html top visual
// $(function() {
//   var hSize = $(window).height();
//   var wSize = $(window).width();
//   $("#ownsvg, .wrap").height(hSize);
//   $("#ownsvg, .wrap").width(wSize);
// });
$(function() {
  var hSize = $(window).height();
  var wSize = $(window).width();
  $(".loading, .wrap").height(hSize);
  $(".loading, .wrap").width(wSize);
});

// $(window).resize(function() {
//   var hSize = $(window).height();
//   var wSize = $(window).width();
//   $("#ownsvg, .wrap").height(hSize);
//   $("#ownsvg, .wrap").width(wSize);
// });
$(window).resize(function() {
  var hSize = $(window).height();
  var wSize = $(window).width();
  $(".loading, .wrap").height(hSize);
  $(".loading, .wrap").width(wSize);
});

// cookie
if ($.cookie("access") == undefined) {
  $.cookie("access", "onece");
} else {
  // $("svg").remove();
  // $(".text").remove();
  $(".loading").remove();
  $(".wrap").css("opacity", "1");
}


// svg animation
$(function() {
  // new Vivus('ownsvg',
  //   {
  //     type: "sync",
  //     start: 'autostart',
  //     duration: 220 ,
  //     pathTimingFunction: Vivus.EASE_OUT
  //   },
  //   function(obj){
  //     obj.el.classList.add('fill');
  //   },
  // );

// svg fadeout function
$(function() {
  $(".wrap").css("display", "none");
    setTimeout(function() {
      // $("#ownsvg").fadeOut();
      $(".loading").fadeOut();
    }, 5000);
  });
  $(function() {
    setTimeout(function() {
      // $(".wrap").css("display", "block");
      // $(".wrap").animate({opacity: "1"}, 1000);
      $(".wrap").fadeIn();
    }, 5000);
  });
});


// slideShow
$(function() {
  $(".wrap-main").each(function() {
    let slides = $(this).find("img");
    let slideCount = slides.length;
    let currentIndex = 0;

    slides.eq(currentIndex).fadeIn(1700);

    setInterval(showNextSlide, 4000);

    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount;
      slides.eq(currentIndex).fadeOut(1700);
      slides.eq(nextIndex).fadeIn(1700);
      currentIndex = nextIndex;
    }
  });
});
