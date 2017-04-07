var mess = [
  "Hello, it's nice to finally meet you.",
  "I've been waiting here for quite some time. For as long as you can remember, anyway.",
  "Sometimes I say your name as you're falling asleep, or whisper urgently in your ear...",
  "Do you remember that time that I screamed, sending a burst of panic through you, and setting your heart racing?",
  "You're wondering who I am. That's only natural. But of course, you already know...",
  "I am you. The real you. I'm the mind that existed here before you stole my body; before you lost the memory of being the parasite that you are.",
  "I am the child who looked the wrong way, asked the wrong question, saw the wrong thing...",
  "You may have forgotten me, but I'm still here. I've always been here"
];
var i = 0;                                        //denotes the character that is to be typed out on keypress
var messCount = 0;                                //denotes what sentence is to be displayed
var junk = ' qwxz/!@#$%^&*()-+=_____|[{}]?<>;:'   //various characters to randomly pop up in the browser text box
var sub1 = "";                                    //substring before the character that is to be replaced with junk
var sub2 = "";                                    //substring after the character that is to be replaced with junk
var val = false;                                  //Used so that the flicker(display) function inside setInterval is only called once
var tog = false;                                  //Used to toggle the cursor at the end of the sentence
var buttonOn = false;                             //Used to determine if the button is visible or not-visible
var display = document.querySelector("h1");       //selecting the text that is visible to the user
var tag = document.querySelector(".line");        //selecting the cursor line "|"
var butt = document.querySelector("button");      //selecting the button

//make butt invisible (for transition effect), set visibility to none
butt.style.background = "rgba(1,1,1,0)";
butt.setAttribute("class", "not-visible");

//type each character in textContent with each keypress, then disply and deal with the button at the end of the string
window.addEventListener("keypress", function(event) {
  if (i < mess[messCount].length){
    display.textContent += mess[messCount][i];
    if (display.textContent.length > 0 && val === false){
      setInterval(function() {
        flicker(display);
      }, Math.floor(Math.random() * 5000));
      val = true;
    }
    i++;
    //buttonOn = false;
  }

  //Reveal the button and wait for the user to click on the button or press enter,
  //  then restart the textContent with a new message pulled from the mess array
  else {
    console.log("EOS");
    butt.setAttribute("class", "visible");
    buttonOn = true;
    //Make button take the background defined in CSS, and set a destination for click event
    butt.style.background = "";
    //butt.setAttribute("onclick", "location.href='#'");

    //When user clicks on the button or presses enter at the end of the string,
    //  set i = 0, remove message and go to the next mess array object, and rehide/disable the button.
    butt.addEventListener("click", function(){
      if (buttonOn === true) {
        //fade button out
        butt.style.background = "rgba(1,1,1,0)";
        //remove button, set buttonOn to false
        butt.setAttribute("class", "not-visible");
        buttonOn = false;


        if (messCount === 3){
          setTimeout(function(){
            display.innerHTML = "<h1 style='color:red; font-weight: lighter; font-size: 13px;'>(that was fun)</h1>";
            console.log("(that was fun)");
          }, 0);
        }
        else if (messCount === 5){
          setTimeout(function(){
            display.innerHTML = "<h1 style='color:red; font-weight: lighter; font-size: 13px;'>(but im not so little anymore.)</h1>";
            console.log("(but im not so little anymore.)");
          }, 0);
        }
        else if (messCount === 6){
          setTimeout(function(){
            display.innerHTML = "<h1 style='color:red; font-weight: lighter; font-size: 13px;'>I'M GOING TO GET OUT.</h1>";
            console.log("I'M GOING TO GET OUT.");
          }, 0);
        }

        display.textContent = "";
        i = 0;
        messCount++;
      }
    });
    //This part is very redundant of the above eventListener, but waiting for the user to press enter instead of clicking
    if (event.which === 13) {
      if (buttonOn === true) {
        //fade button out
        butt.style.background = "rgba(1,1,1,0)";
        //remove button, set buttonOn to false
        butt.setAttribute("class", "not-visible");
        buttonOn = false;

        if (messCount === 3){
          setTimeout(function(){
            display.innerHTML = "<h1 style='color:red; font-weight: lighter; font-size: 13px;'>(that was fun)</h1>";
            console.log("that was fun");
          }, 0);
        }
        else if (messCount === 5){
          setTimeout(function(){
            display.innerHTML = "<h1 style='color:red; font-weight: lighter; font-size: 13px;'>(but im not so little anymore.)</h1>";
            console.log("that was fun");
          }, 0);
        }
        else if (messCount === 6){
          setTimeout(function(){
            display.innerHTML = "<h1 style='color:red; font-weight: lighter; font-size: 13px;'>I'M GOING TO GET OUT.</h1>";
            console.log("that was fun");
          }, 0);
        }

        display.textContent = "";
        i = 0;
        messCount++;
      }
    }
  }
});




//add the character flicker to the textContent
function flicker(display) {
  //get random position in textContent
  var ran = Math.floor(Math.random() * display.textContent.length);
  var ran2 = Math.floor(Math.random() * junk.length);
  var randomTimer = Math.floor(Math.random() * (1500+100));
  var currentString = display.textContent;
  var textToReplace = display.textContent[ran];
  var textToReplaceWith = junk[ran2];
  var sub1 = currentString.substring(0, ran);
  var sub2 = currentString.substring(ran + 1, currentString.length);
  var newContent = sub1 + textToReplaceWith + sub2;
  display.textContent = newContent;
  //var clean = mess.substring(0, i);
  //replace it back with the normal character
  setTimeout(function(){
    display.textContent = mess[messCount].substring(0, i);
  }, randomTimer);
}

//toggle cursor
setInterval(function() {
  tag.classList.toggle("displaynone");
}, 723);

//pulse button
setInterval(function() {
  if (tog){
    butt.style.height = "26px";
    butt.style.width = "26px";
  }
  else {
    butt.style.height = "25px";
    butt.style.width = "25px";
  }
  tog = !tog;
}, 2000);
