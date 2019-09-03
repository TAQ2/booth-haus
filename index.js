function smoothScrollingOfNav() {
  // https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
  $(".nav-link").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash == "") {
      return;
    }
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes
    // to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
        // scrollBottom: $(hash).offset().bottom
      },
      1000,
      function() {}
    );
  });
}

function collapseNavMenuOnLinkClick() {
  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
}

$(document).ready(function() {
  collapseNavMenuOnLinkClick();
  smoothScrollingOfNav();

  $("body").animate({ opacity: 1 }, 600);

  $("video").on("ended", function() {
    $(".video").fadeOut(10);
    $("#home-section *:not(.video)").fadeIn(2000);
  });
});
