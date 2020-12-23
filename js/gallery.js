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


// flickity jquery
let flkty = new Flickity(".main__contents__slide-show", {
  wrapAround: true,
  autoPlay: true,
  contain: true,
  prevNextButtons: true,
  resize: true
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