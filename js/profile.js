// just size fixed of index.html top visual
function imageJustSize() {
  const mainVisual = document.body;
  const deviceHi = document.documentElement.clientHeight;
  const deviceWi = document.documentElement.clientWidth;
  mainVisual.style.height = deviceHi + "px";
  mainVisual.style.width = deviceWi + "px";
}
imageJustSize();
window.addEventListener("resize", imageJustSize);


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


// page top btn/jump-btn fadein and fadeout function
  $(function () {
    let topBtn = $("#page-top-btn");
    let ninaJumpBtn = $("#jump-btn");
    topBtn.hide();
    ninaJumpBtn.hide();

// will come of topBtn function
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      topBtn.fadeIn(600);
      ninaJumpBtn.fadeIn(1000);
    } else {
      topBtn.fadeOut(300);
      ninaJumpBtn.fadeOut(300);
    }
  });

// to page top when click the topBtn
  topBtn.on("click", function() {
    $("body, html").animate({
      scrollTop: 0
    }, 2000,"swing");
    return false;
  });

// to nina section when click the ninaJumpBtn
  ninaJumpBtn.on("click", function() {
    ninaPosition = $("#nina-umbrella-project").offset().top;
    $("body, html").animate({
      scrollTop: ninaPosition
    }, 2000,"swing");
    return false;
  });

});


//description text fadeIn
$(window).on("load scroll", function (){
  let box = $(".fadeIn");

  box.each(function(){
    let boxOffset = $(this).offset().top;
    let scrollPos = $(window).scrollTop();
    let wh = $(window).height();
    if(scrollPos > boxOffset - wh + 100){
      $(this).addClass("animated");
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



