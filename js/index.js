// just size fixed of index.html top visual
var hSize = $(window).height();
$(document).ready(function() {
  $("#ownsvg").css("height", hSize);
  $(".wrap").css("height", hSize);
});
$(window).resize(function() {
  $("#ownsvg").css("height", hSize);
  $(".wrap").css("height", hSize);
});
// $("#ownsvg").css("height",$(window).height());

// let imageHi = document.documentElement.clientHeight + "px";
// let imageWi = document.documentElement.clientWidth + "px";
// function justSize() {
//   document.body.height = imageHi;
//   document.body.width = imageWi;
//   return false;
// }
// justSize();
// window.onload = justSize();
// window.addEventListener("resize", justSize);

// function svgJustImage() {
//   document.getElementById("ownsvg").style.height = imageHi;
//   document.getElementById("ownsvg").style.width = imageWi;
//   return false;
// }
// svgJustImage();
// window.onload = svgJustImage();
// window.addEventListener("resize", svgJustImage);

// function wrapJustImage() {
//   document.getElementById("wrap").style.height = imageHi;
//   document.getElementById("wrap").style.width = imageWi;
//   return false;
// }
// wrapJustImage();
// window.onload = wrapJustImage();
// window.addEventListener("resize", wrapJustImage);

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




// modal menu
$(function() {
  $("#modal-openBtn").show();
  $("#modal-closeBtn").hide();

  $(window).on("load resize", function() {
    let winW = $(window).width();
    let devW = 959;
    if (winW <= devW) {
      $("#gnav").hide();
    } else {
      $("#gnav").show();
    }
  });

  $("#modal-openBtn").on("click", function() {
    $("#cover, #gnav").slideDown(500);
    $(this).hide();
    $("#modal-closeBtn").show();
  });
  $("#cover, #modal-closeBtn").on("click", function() {
    $("#cover, #gnav").slideUp(500);
    $("#modal-openBtn").show();
    $("#modal-closeBtn").hide();
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


// copy right get full year
// get Date preparation
let dayOption = new Date();
let myYear = dayOption.getFullYear();

$(function() {
  function copyRightYear() {
    copyRight = $("#copyRight");
    copyRight.text("2020-" + myYear);
  }
  copyRightYear();
});

