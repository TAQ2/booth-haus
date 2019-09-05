function collapseNavMenuOnLinkClick() {
  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
}

$(document).ready(function() {
  collapseNavMenuOnLinkClick();
  // smoothScrollingOfNav();

  $("body").animate({ opacity: 1 }, 600);
  $("#logo-container").fadeIn(0);

  $("video").on("ended", function() {
    $(".video").fadeOut(1000);
    $("#logo-container").animate(
      { marginTop: "0", paddingLeft: "0", paddingRight: "0" },
      3000
    );
    // $("#logo-container").fadeIn(2000);
    $("#logo-sub-sub").animate({ opacity: 1 }, 5000);
  });
});
