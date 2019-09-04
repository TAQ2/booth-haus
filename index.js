function collapseNavMenuOnLinkClick() {
  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
}

$(document).ready(function() {
  collapseNavMenuOnLinkClick();
  // smoothScrollingOfNav();

  $("body").animate({ opacity: 1 }, 600);

  $("video").on("ended", function() {
    $(".video").fadeOut(10);
    $("#logo-container").fadeIn(2000);
    $("#logo-sub-sub").fadeIn(2000);
  });
});
