
window.onscroll = function() {scrollNav()};

var navbar = document.getElementById("navbar");

var h = window.innerHeight;

function scrollNav() {
  if (window.pageYOffset >= h-150) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");

  }
}