$(document).ready(function () {
  // Theme Toggler
  $("[data-type-theme]").click(function () {
    $("body").toggleClass("white-theme");
  });

  // Menu Toggler
  $("[data-type-menu]").click(function () {
    $("#sm-nav").slideToggle(500);
    $("[data-type-menu='open']").toggle();
    $("[data-type-menu='close']").toggle();
  });

  $("#hero-contact").hover(function () {
    $("#hero-contact").css("background-color", "var(--yellow)");
    $("#email-shown").toggle();
    $("#email-hidden").toggle();
  },
    function () {
      $("#hero-contact").css("background-color", "transparent");
      $("#email-shown").toggle();
      $("#email-hidden").toggle();
    }
  );

  $(".hero-social-icons").hover(function () {
    $(this).css("color", "var(--yellow)");
  },
    function () {
      $(this).css("color", "var(--gray)");
    }
  );

  const year = new Date().getFullYear();
  $("#year").text(year + ". ");
});
