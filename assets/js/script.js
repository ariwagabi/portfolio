$(document).ready(function () {
  $(".menu-toggler").click(function () {
    $("#sm-nav").slideToggle(500);
    $("[data-type-menu='open']").toggle();
    $("[data-type-menu='close']").toggle();
  });

  $("#hero-name-link").hover(function () {
    $("#hero-contact").css("background-color", "var(--dimmed-yellow)");
    $("#email-shown").css("display", "none");
    $("#email-hidden").css("display", "block");
  },
    function () {
      $("#hero-contact").css("border-color", "var(--dimmed-yellow)");
      $("#hero-contact").css("background-color", "var(--dimmed-ash)");
      $("#email-shown").css("display", "block");
      $("#email-hidden").css("display", "none");
    }
  );

  $(".hover-dim-yellow").hover(function () {
    $(this).css("color", "var(--dimmed-yellow)");
  },
    function () {
      $(this).css("color", "var(--pale-gray)");
    }
  );

  const year = new Date().getFullYear();
  $("#year").text(year + ". ")
});