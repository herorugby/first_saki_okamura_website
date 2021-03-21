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
    $("#gnav").slideDown(500);
    $(this).hide();
    $("#modal-closeBtn").show();
    $("#gnav").css("z-index", "5");
    $("html,body").css("overflow", "hidden");
    // $("html,body").css("pointer-events", "none");
    return false;
  });
  $("#modal-closeBtn").on("click", function() {
    $("#gnav").slideUp(500);
    $("#modal-openBtn").show();
    $("#modal-closeBtn").hide();
    $("html,body").removeAttr("style");
    return false;
  });
});


// copy right get full year
$(function() {
  let dayOption = new Date();
  let myYear = dayOption.getFullYear();
  let copyRight = $("#copyRight");
  copyRight.text("2020-" + myYear);
});
