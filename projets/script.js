function menuOnClick() {
  document.getElementById("nav-liens").classList.toggle("menu-mobile");
}
/* lorsque le menu-mobile a été déployé par l'utilisatuer et que ce dernier sroll vers le bas, le menu-mobile perds sa clase menu-mobile, ainsi il se retracte*/
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    document.getElementById("nav-liens").classList.remove("menu-mobile");
  }
});

  window.onload = function() {
    setTimeout(function() {
        document.querySelector('.fade-in-img').classList.add('show');
    }, 200);
}

/* permet de faire apparaître la navabr lors du scroll vers le haut
*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nava").style.top = "0";
  } else {
    document.getElementById("nava").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
