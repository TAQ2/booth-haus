$("body").css("display", "none");

$(document).ready(function() {
  $("#logo-container").load("./assets/logo.svg", function() {
    $("body").css("display", "block");
  });
});
