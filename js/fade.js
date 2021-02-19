// page top btn fadein and fadeout function
  $(function () {
    let topBtn = $("#page-top-btn");
    topBtn.hide();

// will come of topBtn function
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      topBtn.fadeIn(600);
    } else {
      topBtn.fadeOut(300);
    }
  });

// to page top when click the topBtn
  topBtn.on("click", function() {
    $("body, html").animate({
      scrollTop: 0
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
