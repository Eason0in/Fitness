$("#nav-button").on("click", () => {
  $("#nav-menu,#nav-button").toggleClass("active");
});

$("#member,#guest").on("click", e => {
  const target = e.target.parentElement.id;
  $(`#${target}`)
    .toggleClass("active")
    .siblings()
    .toggleClass("active");

  $(`#form-${target}`)
    .toggleClass("active")
    .siblings(".form-content")
    .toggleClass("active");
});

$(document).ready(function() {
  $(".home_bg h2").hide();
  $(".home_bg h2").fadeIn("slow");
  // $("#form-member").hide();
});
