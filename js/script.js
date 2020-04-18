window.addEventListener("scroll", () => {
  var w = window.scrollY;
  var wSize = $(window).width();

  if (wSize > 768) {
    if (w > 942) {
      $(".navbar").addClass("fixed");
    } else {
      $(".navbar").removeClass("fixed");
    }
  } else {
    if (w > 194) {
      $(".navbar").addClass("fixed");
    } else {
      $(".navbar").removeClass("fixed");
    }
  }
});
