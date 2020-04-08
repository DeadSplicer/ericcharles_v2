var isMobile = window.matchMedia("only screen and (max-width: 767px)");

//check if the user is using chrome (used to determine how to handle the input)
function isChrome() {
  var isChromium = window.chrome,
    winNav = window.navigator,
    vendorName = winNav.vendor,
    isOpera = winNav.userAgent.indexOf("OPR") > -1,
    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
    isIOSChrome = winNav.userAgent.match("CriOS");

  if(isIOSChrome){
    return true;
  } else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
    return true;
  } else {
    return false;
  }
}

if (isMobile.matches) {
  //Conditional script here
  $("div#desktopMenu").attr("id", "mobileMenu");
  $("div a.button").attr("class", "mobileButton");
  $(".menu_button").show();
  $(".mobile_insta").show();
  $(".desktop_insta").hide();
  $("a").removeClass("filter");

}
else {
  $("div#desktopMenu").attr("id", "desktopMenu");
  $("div a.mobileButton").attr("class", "button");
    $(".menu_button").hide();
    $(".mobile_insta").hide();
    $(".desktop_insta").show();
}

$('#mobileMenu').hide();

$('.menu_button').on('click', function(){
  $('#mobileMenu').slideToggle(823, "easeOutExpo");
  //alert("click");
})

//Nothing happens here, so https://www.youtube.com/watch?v=LoXfiSU_wqE
var txt = "";
var currentPage = document.getElementById("active").textContent;

if (currentPage === "Photography"){
  window.addEventListener("keypress", function(event) {
    if (isChrome()){
      console.log("Chrome!");
      txt += event.key.toUpperCase();
      console.log(txt);
      if(txt === "CODE"){
        window.location = "../../txt/index.html"
      }
      else if(txt === "NSFW"){
        window.location = "../../pages/photo/314159265.html"
      }
      else if(txt === "BUD"){
        window.location = "../../pages/photo/01101110011100110110011001110111.html"
      }
      else if(txt === "TEST"){
        window.location = "../../txt/PHSLEU.html"
      }
    }
    else {
      txt += event.key.toUpperCase();
      console.log(txt)
      if(txt === "CODE"){
        window.location = "../../txt/index.html"
      }
      else if(txt === "NSFW"){
        window.location = "../../pages/photo/314159265.html"
      }
      else if(txt === "BUD"){
        window.location = "../../pages/photo/01101110011100110110011001110111.html"
      }
    }
  });
  console.log("Password:");
}


const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();


/*
 * Youtube video auto-resizer script
 * Created by Skipser.com
*/

$(document).ready(function() {
  if(typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
    YOUTUBE_VIDEO_MARGIN=5;
  }
  $('iframe').each(function(index,item) {
    if($(item).attr('src').match(/(https?:)?\/\/www\.youtube\.com/)) {
      var w=$(item).attr('width');
      var h=$(item).attr('height');
      var ar = h/w*100;
      ar=ar.toFixed(2);
      //Style iframe
      $(item).css('position','absolute');
      $(item).css('top','0');
      $(item).css('left','0');
      $(item).css('width','100%');
      $(item).css('height','100%');
      $(item).css('max-width',w+'px');
      $(item).css('max-height', h+'px');
      $(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:'+YOUTUBE_VIDEO_MARGIN+'px;" />');
      $(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
    }
  });
});
