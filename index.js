$("body").css("display", "none");

$(document).ready(function() {
  $("#logo-container").load("logo.svg", function() {
    $("body").css("display", "block");
  });
});
