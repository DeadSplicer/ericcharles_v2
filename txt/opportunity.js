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



var txt = "";
// var currentPage = document.getElementById("active").textContent;


window.addEventListener("keypress", function(event) {
  if (isChrome()){
    // console.log("Chrome!");
    txt += event.key.toUpperCase();
    console.log(txt);
    if(txt === "CODE"){
      // window.location = "../../txt/index.html"
      console.log("you did it");
    }
  }
  else {
    txt += event.key.toUpperCase();
    console.log(txt)
    if(txt === "CODE"){
      // window.location = "../../txt/index.html"
      console.log("you did it");
    }
  }
});
console.log("Password:");
