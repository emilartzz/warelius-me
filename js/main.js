
window.onscroll = function() {scrollNav()};

var navbar = document.getElementById("navbar");

var h = window.innerHeight;

function scrollNav() {
  if (window.pageYOffset >= h-300) {
    $("#last_name_landing").fadeOut("fast");

  } else {
    $("#last_name_landing").fadeIn();

  }
}