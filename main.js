// Skript um Höhen von containern aufeinander abzustimmen

function syncHeight() {
    let reference = document.querySelector(".element-1").offsetHeight;
    document.querySelector(".element-2").style.height = reference + "px";
  }
  
  // Beim Laden und beim Fenster-Resize ausführen
  window.onload = syncHeight;
  window.onresize = syncHeight;

// Cookie Banner Skript

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}

function runCookiedCodes() {
  // Add tracking scripts here
  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TTER589G1V');
   // End tracking scripts

  console.log("cookies ran");
}

if (readCookie("cookie-notice-accepted") == "true") {
  runCookiedCodes();
document.querySelector(".reshow-button").classList.add("hide-button");
  
} else {
  
  document.getElementById("cookie-notice").style.display = "block";
}

document
  .getElementById("cookie-notice-accept")
  .addEventListener("click", function () {
    createCookie("cookie-notice-accepted", "true", 31);
    document.getElementById("cookie-notice").style.display = "none";
    document.getElementById("cookie-notice").classList.add("hide-button");
    runCookiedCodes();
  });

document
  .querySelector("#close-cookie-banner")
  .addEventListener("click", (e) => {
    eraseCookie("cookie-notice-accepted")
    document.getElementById("cookie-notice").style.display = "none";

    console.log("cookies erased")
  });

document.querySelector(".reshow-button")
  .addEventListener("click", function() {
  document.getElementById("cookie-notice").style.display = "block";
})
  