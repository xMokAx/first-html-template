function toggleNav() {
  var mySideNav = document.getElementById("mySidenav");
  if (mySideNav.className === "sidenav") {
    mySideNav.className += " sidenavWidth";
  } else {
    mySideNav.className = "sidenav";
  }
}
document
  .getElementsByClassName("navbar-toggle")[0]
  .addEventListener("click", toggleNav);

function toggleNav2() {
  var mySideNav = document.getElementById("mySidenav");
  if (mySideNav.classList.length === 2) {
    mySideNav.classList.remove("sidenavWidth");
  }
}

var links = document.getElementsByTagName("a");
for (var i = 0; i < 5; i++) {
  links[i].addEventListener("click", toggleNav2);
}
