var isMobile = window.matchMedia("only screen and (max-width: 767px)");



if (isMobile.matches) {
  //Conditional script here
  $("div#desktopMenu").attr("id", "mobileMenu");
  $("div a.button").attr("class", "mobileButton");
  $(".menu_button").show();

}
else {
  $("div#desktopMenu").attr("id", "desktopMenu");
  $("div a.mobileButton").attr("class", "button");
    $(".menu_button").hide();
}

$('#mobileMenu').hide();

$('.menu_button').on('click', function(){
  $('#mobileMenu').slideToggle(823, "easeOutExpo");
  //alert("click");
})
