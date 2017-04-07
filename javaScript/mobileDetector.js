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

//Nothing happens here, so just jog on. Twat.
var txt = "";
var currentPage = document.getElementById("active").textContent;

if (currentPage === "Photography"){
  window.addEventListener("keypress", function(event) {
    txt += event.code[3];
    if(txt === "CODE"){
      window.location = "../../txt/index.html"
      console.log("worked");
    }
  });
  console.log("Password:");
}
